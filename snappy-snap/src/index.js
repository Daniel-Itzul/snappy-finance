wallet.registerRpcMessageHandler(async (originString, requestObject) => {
  const {method, operation, tokenAddress, tokenAmount} = requestObject;
  const promptValue = `Are you sure you want to ${operation} ?`
  const descriptionValue = "If you approve you will be asked to send the following transactions:";
  switch (method) {
    case 'requestApproval':
      return wallet.request({
        method: 'snap_confirm',
        params: [
          {
            prompt: promptValue,
            description: descriptionValue,
            textAreaContent: `You will approve Snappy for an amount of ${tokenAmount} of tokens of ${tokenAddress}.\rA ${operation} for the said amount will take place in the protocol afterwards.`
          },
        ],
      });
    case 'requestOperation':
      return wallet.request({
        method: 'snap_confirm',
        params: [
          {
            prompt: promptValue,
            description: descriptionValue,
            textAreaContent: `A ${operation} for the amount of ${tokenAmount} of tokens of ${tokenAddress} will take place in the protocol.`
          },
        ],
      });
    default:
      throw new Error('Method not found.');
  }
});
