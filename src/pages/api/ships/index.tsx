import { NextApiHandler } from "next";
import { readFileSync } from "fs";
import { join } from "path";

const ships: NextApiHandler = (req, res) => {
  const path = join(process.cwd(), "src", "generated", "ships.json");
  const ships = JSON.parse(readFileSync(path, "utf-8"));

  res.status(200).json(ships);
};
export default ships;
