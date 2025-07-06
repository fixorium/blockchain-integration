import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom';

class PhantomWalletApi {
  constructor() {
    this.adapter = new PhantomWalletAdapter();
  }

  async connect() {
    try {
      await this.adapter.connect();
      return this.adapter.publicKey;
    } catch (error) {
      console.error('Error connecting to Phantom wallet:', error);
      throw error;
    }
  }

  async disconnect() {
    try {
      await this.adapter.disconnect();
    } catch (error) {
      console.error('Error disconnecting from Phantom wallet:', error);
      throw error;
    }
  }

  async signTransaction(transaction) {
    try {
      const signedTransaction = await this.adapter.signTransaction(transaction);
      return signedTransaction;
    } catch (error) {
      console.error('Error signing transaction with Phantom wallet:', error);
      throw error;
    }
  }

  async signAllTransactions(transactions) {
    try {
      const signedTransactions = await this.adapter.signAllTransactions(transactions);
      return signedTransactions;
    } catch (error) {
      console.error('Error signing transactions with Phantom wallet:', error);
      throw error;
    }
  }

  async sendTransaction(transaction, connection) {
    try {
      const signature = await this.adapter.sendTransaction(transaction, connection);
      return signature;
    } catch (error) {
      console.error('Error sending transaction with Phantom wallet:', error);
      throw error;
    }
  }
}

export default PhantomWalletApi;
