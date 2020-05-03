import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

import TextField from "@material-ui/core/TextField";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import BasePage from "../BasePage/BasePage";
import JSONEditor from "../../components/JSONEditor/JSONEditor";

import makeDIDDoc from "./makeDIDDoc";

const {
  SchnorrSecp256k1Signature2019,
  SchnorrSecp256k1VerificationKey2019,
} = require("@transmute/lds-ss256k");

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

const secp256k1 = require("secp256k1");

const jsigs = require("jsonld-signatures");

const { AssertionProofPurpose } = jsigs.purposes;

const bip39 = require("bip39");
var HDKey = require("hdkey");

const schemaOrg = require("../../contexts/schema.org.json");

const extendedDocumentLoader = (url) => {
  console.log("Loading: ", url);
  if (url === "https://schema.org") {
    return {
      contextUrl: null, // this is for a context via a link header
      document: schemaOrg, // this is the actual document that was loaded
      documentUrl: url, // this is the actual context URL after redirects
    };
  }
  if (url.split("#")[0] === "did:example:123") {
    return {
      contextUrl: null, // this is for a context via a link header
      document: window.didDocument, // this is the actual document that was loaded
      documentUrl: url, // this is the actual context URL after redirects
    };
  }
  return defaultDocumentLoader(url);
};

const HomePage = ({ tmui, setTmuiProp }) => {
  // console.log(childkey);

  const [state, setState] = React.useState({
    mnemonic: "",
    path: "",
    publicKeyHex: "",
    privateKeyHex: "",
    editorObject: {
      "@context": [
        "https://schema.org",
        "https://identity.foundation/EcdsaSecp256k1RecoverySignature2020/lds-ecdsa-secp256k1-recovery2020-0.0.jsonld",
        "https://identity.foundation/SchnorrSecp256k1Signature2019/contexts/schnorr-v1.json",
      ],
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
    hasBeenSigned: false,
    es256kSignedEditorObject: {},
    es256krSignedEditorObject: {},
    ss256kSignedEditorObject: {},
    didDocument: {},
  });

  const generateKeys = async () => {
    const mnemonic = await bip39.generateMnemonic();
    const seed = await bip39.mnemonicToSeed(mnemonic);
    var hdkey = HDKey.fromMasterSeed(seed);
    const path = `m’/44’/60’/0’/0`;
    var childkey = hdkey.derive(path);
    const publicKeyHex = childkey.publicKey.toString("hex");
    const privateKeyHex = childkey.privateKey.toString("hex");
    const didDocument = await makeDIDDoc(publicKeyHex);
    window.didDocument = didDocument;
    setState({
      ...state,
      mnemonic,
      path,
      publicKeyHex,
      privateKeyHex,
      didDocument,
    });
  };

  React.useEffect(() => {
    generateKeys();
    // eslint-disable-next-line
  }, []);

  const onChangeHandler = async () => {
    const privateKeyJwk = await ES256K.keyUtils.privateJWKFromPrivateKeyHex(
      state.privateKeyHex
    );

    const suite1 = new EcdsaSecp256k1Signature2019({
      key: new EcdsaSecp256k1KeyClass2019({
        id: "did:example:123#EcdsaSecp256k1VerificationKey2019",
        type: "EcdsaSecp256k1VerificationKey2019",
        controller: "did:example:123",
        privateKeyJwk,
      }),
    });

    const es256kSignedEditorObject = await jsigs.sign(
      { ...state.editorObject },
      {
        compactProof: false,
        documentLoader: extendedDocumentLoader,
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
      { ...state.editorObject },
      {
        compactProof: false,
        documentLoader: extendedDocumentLoader,
        purpose: new AssertionProofPurpose(),
        suite: suite2,
      }
    );

    const suite3 = new SchnorrSecp256k1Signature2019({
      key: new SchnorrSecp256k1VerificationKey2019({
        id: "did:example:123#SchnorrSecp256k1VerificationKey2019",
        type: "SchnorrSecp256k1VerificationKey2019",
        controller: "did:example:123",
        privateKeyJwk,
      }),
    });

    const ss256kSignedEditorObject = await jsigs.sign(
      { ...state.editorObject },
      {
        compactProof: false,
        documentLoader: extendedDocumentLoader,
        purpose: new AssertionProofPurpose(),
        suite: suite3,
      }
    );

    const es256kSignedEditorObjectVerified = await jsigs.verify(
      es256kSignedEditorObject,
      {
        suite: suite1,
        compactProof: false,
        documentLoader: extendedDocumentLoader,
        purpose: new AssertionProofPurpose({
          // when controller is provided, document loader is not used to resolve keys.
          controller: state.didDocument,
        }),
      }
    );
    console.log(es256kSignedEditorObjectVerified);

    const es256krSignedEditorObjectVerified = await jsigs.verify(
      es256krSignedEditorObject,
      {
        suite: suite2,
        compactProof: false,
        documentLoader: extendedDocumentLoader,
        purpose: new AssertionProofPurpose({
          // when controller is provided, document loader is not used to resolve keys.
          controller: state.didDocument,
        }),
      }
    );

    console.log(es256krSignedEditorObjectVerified);

    const ss256kSignedEditorObjectVerified = await jsigs.verify(
      ss256kSignedEditorObject,
      {
        suite: suite3,
        compactProof: false,
        documentLoader: extendedDocumentLoader,
        purpose: new AssertionProofPurpose({
          // when controller is provided, document loader is not used to resolve keys.
          controller: state.didDocument,
        }),
      }
    );

    console.log(ss256kSignedEditorObjectVerified);

    setState({
      ...state,
      es256kSignedEditorObject,
      es256kSignedEditorObjectVerified,
      es256krSignedEditorObject,
      es256krSignedEditorObjectVerified,
      ss256kSignedEditorObject,
      ss256kSignedEditorObjectVerified,
      hasBeenSigned: true,
    });
  };

  return (
    <BasePage tmui={tmui} setTmuiProp={setTmuiProp}>
      <Typography variant={"h5"} style={{ marginBottom: "32px" }}>
        Secp256k1 JSON-LD
      </Typography>

      <Typography style={{ marginBottom: "32px" }}>
        This web page shows how secp256k1 can be used to created linked data
        signatures:
      </Typography>

      <ul>
        <li>
          <a
            href="https://github.com/decentralized-identity/lds-ecdsa-secp256k1-2019.js"
            target="_blank"
            rel="noopener noreferrer"
          >
            EcdsaSecp256k1Signature2019
          </a>
        </li>
        <li>
          <a
            href="https://github.com/decentralized-identity/SchnorrSecp256k1Signature2019"
            target="_blank"
            rel="noopener noreferrer"
          >
            SchnorrSecp256k1Signature2019
          </a>
        </li>
        <li>
          <a
            href="https://github.com/decentralized-identity/EcdsaSecp256k1RecoverySignature2020"
            target="_blank"
            rel="noopener noreferrer"
          >
            EcdsaSecp256k1RecoverySignature2020
          </a>
        </li>
      </ul>
      <div style={{ padding: "16px" }}>
        <Grid container>
          <Grid container spacing={6}>
            <Grid item xs={6}>
              <Grid item xs={12} style={{ marginBottom: "32px" }}>
                <TextField
                  label="BIP 39 Menmonic"
                  helperText="Be careful trusting entropy sources!"
                  variant="outlined"
                  fullWidth
                  onChange={async (event) => {
                    const newMnemonic = event.target.value;
                    const newSeed = await bip39.mnemonicToSeed(newMnemonic);
                    const hdkey = HDKey.fromMasterSeed(newSeed);
                    const childkey = hdkey.derive(state.path);
                    const newPublicKeyHex = childkey.publicKey.toString("hex");
                    const newPrivateKeyHex = childkey.privateKey.toString(
                      "hex"
                    );
                    const didDocument = await makeDIDDoc(newPublicKeyHex);
                    window.didDocument = didDocument;
                    setState({
                      ...state,
                      publicKeyHex: newPublicKeyHex,
                      privateKeyHex: newPrivateKeyHex,
                      mnemonic: newMnemonic,
                      didDocument,
                    });
                  }}
                  value={state.mnemonic}
                />
              </Grid>
              <Grid item xs={12} style={{ marginBottom: "32px" }}>
                <TextField
                  label="HD Path"
                  variant="outlined"
                  fullWidth
                  onChange={async (event) => {
                    const newPath = event.target.value;
                    try {
                      const seed = await bip39.mnemonicToSeed(state.mnemonic);
                      const hdkey = HDKey.fromMasterSeed(seed);
                      const childkey = hdkey.derive(newPath);
                      const newPublicKeyHex = childkey.publicKey.toString(
                        "hex"
                      );
                      const newPrivateKeyHex = childkey.privateKey.toString(
                        "hex"
                      );
                      const didDocument = await makeDIDDoc(newPublicKeyHex);
                      window.didDocument = didDocument;
                      setState({
                        ...state,
                        path: newPath,
                        publicKeyHex: newPublicKeyHex,
                        privateKeyHex: newPrivateKeyHex,
                        didDocument,
                      });
                    } catch (e) {
                      console.error(e);
                      setState({
                        ...state,
                        path: newPath,
                        publicKeyHex: "",
                        privateKeyHex: "",
                        didDocument: {},
                      });
                    }
                  }}
                  value={state.path}
                />
              </Grid>

              <Grid item xs={12} style={{ marginBottom: "32px" }}>
                <TextField
                  label="Private Key Hex"
                  variant="outlined"
                  fullWidth
                  onChange={async (event) => {
                    // try {
                    const newPrivateKeyHex = event.target.value;
                    // console.log({ newPrivateKeyHex });
                    // // Then generate the public point/key corresponding to your secret key.
                    let newPublicKeyHex;
                    try {
                      newPublicKeyHex = Buffer.from(
                        await secp256k1.publicKeyCreate(
                          new Uint8Array(Buffer.from(newPrivateKeyHex, "hex"))
                        )
                      ).toString("hex");
                    } catch (e) {
                      console.error(e);
                    }
                    // console.log({ newPublicKeyHex });

                    let didDocument;
                    try {
                      didDocument = await makeDIDDoc(newPublicKeyHex);
                      window.didDocument = didDocument;
                    } catch (e) {
                      console.error(e);
                    }

                    setState({
                      ...state,
                      path: "",
                      mnemonic: "",
                      didDocument,
                      publicKeyHex: newPublicKeyHex,
                      privateKeyHex: newPrivateKeyHex,
                    });
                  }}
                  value={state.privateKeyHex}
                />
              </Grid>

              <Grid item xs={12} style={{ marginBottom: "32px" }}>
                <TextField
                  label="Public Key Hex"
                  variant="outlined"
                  fullWidth
                  disabled
                  value={state.publicKeyHex}
                  helperText={"Determined by Private Key Hex"}
                />
              </Grid>

              <Grid item xs={12} style={{ marginBottom: "32px" }}>
                <ExpansionPanel>
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>DID Document</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <JSONEditor jsonObject={state.didDocument} />
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Button
                color={"primary"}
                style={{ marginBottom: "16px", float: "left" }}
                onClick={_.debounce(async (data) => {
                  await generateKeys();
                }, 500)}
              >
                Regenerate
              </Button>
              <Button
                variant="contained"
                color={"primary"}
                style={{ marginBottom: "16px", float: "right" }}
                onClick={_.debounce((data) => {
                  onChangeHandler();
                }, 2 * 1000)}
              >
                Sign Document
              </Button>
              <Grid item xs={12}>
                <JSONEditor
                  jsonObject={state.editorObject}
                  onChange={_.debounce((data) => {
                    setState({
                      ...state,
                      editorObject: JSON.parse(data),
                    });
                  }, 2 * 1000)}
                />
              </Grid>
            </Grid>
          </Grid>

          {state.hasBeenSigned && (
            <React.Fragment>
              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom>
                  Signed Documents
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={6}>
                  <Grid item sm={12} md={4}>
                    <JSONEditor jsonObject={state.es256kSignedEditorObject} />
                  </Grid>
                  <Grid item sm={12} md={4}>
                    <JSONEditor jsonObject={state.es256krSignedEditorObject} />
                  </Grid>
                  <Grid item sm={12} md={4}>
                    <JSONEditor jsonObject={state.ss256kSignedEditorObject} />
                  </Grid>
                </Grid>
              </Grid>
            </React.Fragment>
          )}
        </Grid>
      </div>
    </BasePage>
  );
};

HomePage.propTypes = {
  tmui: PropTypes.object,
  setTmuiProp: PropTypes.func,
};

export default HomePage;
