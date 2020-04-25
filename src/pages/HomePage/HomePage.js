import React from "react";
import PropTypes from "prop-types";

import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import BasePage from "../BasePage/BasePage";
import JSONEditor from "../../components/JSONEditor/JSONEditor";

const ES256K = require("@transmute/es256k-jws-ts");

const {
  EcdsaSecp256k1KeyClass2019,
  EcdsaSecp256k1Signature2019,
  defaultDocumentLoader,
} = require("@transmute/lds-ecdsa-secp256k1-2019");

const {
  EcdsaSecp256k1RecoveryMethod2020,
  EcdsaSecp256k1RecoverySignature2020,
} = require("@transmute/lds-ecdsa-secp256k1-recovery2020");

const jsigs = require("jsonld-signatures");

const { AssertionProofPurpose } = jsigs.purposes;

const bip39 = require("bip39");
var HDKey = require("hdkey");

const extendedDocumentLoader = (url) => {
  console.log(url);
  return defaultDocumentLoader(url);
};

const HomePage = ({ tmui, setTmuiProp }) => {
  const [state, setState] = React.useState({
    mnemonic: "",
    path: `m/0/2147483647'/1`,
    publicKeyHex: "",
    privateKeyHex: "",
    editorObject: {
      "@context": "https://schema.org",
      "@type": "SpecialAnnouncement",
      name: "Stanford announce COVID-19 testing facility",
      text:
        "Stanford Health Care’s same-day primary care program is offering drive-through testing, by appointment, for SARS-CoV-2, the coronavirus that causes COVID-19.",
      datePosted: "2020-03-16",
      url:
        "http://med.stanford.edu/news/all-news/2020/03/stanford-offers-drive-through-coronavirus-test.html",
      category: "https://www.wikidata.org/wiki/Q81068910",
      announcementLocation: {
        "@type": "CovidTestingFacility",
        name: "Stanford Health Care",
        url: "https://stanfordhealthcare.org/",
      },
    },
  });
  const {
    mnemonic,
    path,
    publicKeyHex,
    privateKeyHex,
    editorObject,
    es256kSignedEditorObject,
    es256krSignedEditorObject,
  } = state;
  React.useEffect(() => {
    (async () => {
      const mnemonic = bip39.generateMnemonic();
      const seed = bip39.mnemonicToSeed(mnemonic);
      var hdkey = HDKey.fromMasterSeed(seed);
      var childkey = hdkey.derive(path);
      // console.log(childkey);
      const privateKeyHex = childkey.privateKey.toString("hex");
      const publicKeyHex = childkey.publicKey.toString("hex");

      const privateKeyJwk = await ES256K.keyUtils.privateJWKFromPrivateKeyHex(
        privateKeyHex
      );
      const publicKeyJwk = await ES256K.keyUtils.publicJWKFromPublicKeyHex(
        publicKeyHex
      );

      const suite1 = new EcdsaSecp256k1Signature2019({
        key: new EcdsaSecp256k1KeyClass2019({
          id: "did:example:123#key-0",
          type: "EcdsaSecp256k1VerificationKey2019",
          controller: "did:example:123",
          privateKeyJwk,
        }),
      });

      const es256kSignedEditorObject = await jsigs.sign(
        { ...editorObject },
        {
          compactProof: false,
          documentLoader: defaultDocumentLoader,
          purpose: new AssertionProofPurpose(),
          suite: suite1,
        }
      );

      const suite2 = new EcdsaSecp256k1RecoverySignature2020({
        key: new EcdsaSecp256k1RecoveryMethod2020({
          id: "did:example:123#key-1",
          type: "EcdsaSecp256k1RecoveryMethod2020",
          controller: "did:example:123",
          privateKeyJwk,
        }),
      });

      const es256krSignedEditorObject = await jsigs.sign(
        { ...editorObject },
        {
          compactProof: false,
          documentLoader: defaultDocumentLoader,
          purpose: new AssertionProofPurpose(),
          suite: suite2,
        }
      );

      const didDocument = {
        "@context": [
          "https://www.w3.org/ns/did/v1",
          "https://identity.foundation/EcdsaSecp256k1RecoverySignature2020/lds-ecdsa-secp256k1-recovery2020-0.0.jsonld",
        ],
        id: "did:example:123",
        assertionMethod: [
          {
            id: "did:example:123#key-0",
            type: "EcdsaSecp256k1VerificationKey2019",
            controller: "did:example:123",
            publicKeyJwk,
          },
          {
            id: "did:example:123#key-1",
            type: "EcdsaSecp256k1RecoveryMethod2020",
            controller: "did:example:123",
            publicKeyJwk,
          },
        ],
      };

      console.log(es256kSignedEditorObject);
      const es256kSignedEditorObjectVerified = await jsigs.verify(
        es256kSignedEditorObject,
        {
          suite: suite1,
          compactProof: false,
          documentLoader: extendedDocumentLoader,
          purpose: new AssertionProofPurpose({
            // when controller is provided, document loader is not used to resolve keys.
            controller: didDocument,
          }),
        }
      );
      // console.log(es256kSignedEditorObjectVerified);

      suite2.verifier = {
        verify: () => {
          return true;
        },
      };

      const es256krSignedEditorObjectVerified = await jsigs.verify(
        es256krSignedEditorObject,
        {
          suite: suite2,
          compactProof: false,
          documentLoader: extendedDocumentLoader,
          purpose: new AssertionProofPurpose({
            // when controller is provided, document loader is not used to resolve keys.
            controller: didDocument,
          }),
        }
      );

      console.log(es256krSignedEditorObjectVerified);

      setState({
        ...state,
        mnemonic,
        publicKeyHex,
        privateKeyHex,
        privateKeyJwk,
        es256kSignedEditorObject,
        es256kSignedEditorObjectVerified,
        es256krSignedEditorObject,
      });
    })();
  }, []);

  return (
    <BasePage tmui={tmui} setTmuiProp={setTmuiProp}>
      <Typography variant={"h5"} style={{ marginBottom: "32px" }}>
        Secp256k1 JSON-LD
      </Typography>

      <Grid container spacing={6}>
        <Grid item xs={12}>
          <TextField
            label="BIP 39 Menmonic"
            helperText="Be careful trusting entropy sources!"
            variant="outlined"
            fullWidth
            value={mnemonic}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="HD Path"
            variant="outlined"
            fullWidth
            value={path}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Public Key Hex"
            variant="outlined"
            fullWidth
            value={publicKeyHex}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Private Key Hex"
            variant="outlined"
            fullWidth
            value={privateKeyHex}
          />
        </Grid>
        <Grid item xs={12}>
          <JSONEditor
            jsonObject={editorObject}
            onChange={(data) => {
              console.log("on change: ", data);
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <JSONEditor
            jsonObject={es256kSignedEditorObject}
            onChange={(data) => {
              console.log("on change: ", data);
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <JSONEditor
            jsonObject={es256krSignedEditorObject}
            onChange={(data) => {
              console.log("on change: ", data);
            }}
          />
        </Grid>
      </Grid>
    </BasePage>
  );
};

HomePage.propTypes = {
  tmui: PropTypes.object,
  setTmuiProp: PropTypes.func,
};

export default HomePage;
