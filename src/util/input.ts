import readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export const takeInput = async () => {
  const command = (await new Promise((resolve) => {
    rl.question(
      `Input a country code or type 'list' to get available country codes: `,
      (input: string) => {
        resolve(input);
        rl.close();
      }
    );
  })) as string;
  return command;
};
