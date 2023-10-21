# AxiomAssets

Easy tools to make digital assets

## How to setup

```bash
npm install
```

Create a new .env config file under root directory 

```bash
touch .env
```

### Provide your private key

in the `.env` file, replace `your-private-key`:

```
ADMIN_PRIVATE_KEY={your-private-key}
```

### Set network

go to hardhat.config.ts, modify the network rpc `url`

```js
defaultNetwork: "aries",

  networks: {
    hardhat: {
    },
    aries: {
      url: "https://rpc1.aries.axiomesh.io",
      accounts: [adminPrivateKey]
    },
  },
```

## How to deploy your contract 

Run `deploy-{contract-name}.ts` under scripts folder:

```shell
npx hardhat run scripts/deploy-{contract-name}.ts
```
