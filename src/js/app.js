import Field from "./field";
import GamePlay from "./gameplay";

const fields = new Field();
const gameplay = new GamePlay(fields);
gameplay.init();
