const ES256K = require("@transmute/es256k-jws-ts");
const { helpers } = require("@transmute/lds-ecdsa-secp256k1-recovery2020");

export default async (publicKeyHex) => {
  const publicKeyJwk = await ES256K.keyUtils.publicJWKFromPublicKeyHex(
    publicKeyHex
  );
  const didDocument = {
    "@context": [
      "https://www.w3.org/ns/did/v1",
      "https://identity.foundation/EcdsaSecp256k1RecoverySignature2020/lds-ecdsa-secp256k1-recovery2020-0.0.jsonld",
      "https://identity.foundation/SchnorrSecp256k1Signature2019/contexts/schnorr-v1.json",
    ],
    id: "did:example:123",
    assertionMethod: [
      {
        id: "did:example:123#SchnorrSecp256k1VerificationKey2019",
        type: "EcdsaSecp256k1VerificationKey2019",
        controller: "did:example:123",
        publicKeyJwk,
      },
      {
        id: "did:example:123#EcdsaSecp256k1VerificationKey2019",
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
      {
        id: "did:example:123#key-2",
        type: "EcdsaSecp256k1RecoveryMethod2020",
        controller: "did:example:123",
        publicKeyHex: publicKeyHex,
      },
      {
        id: "did:example:123#key-3",
        type: "EcdsaSecp256k1RecoveryMethod2020",
        controller: "did:example:123",
        ethereumAddress: helpers.publicKeyToEthereumAddress(
          Buffer.from(publicKeyHex, "hex")
        ),
      },
    ],
  };
  return didDocument;
};
