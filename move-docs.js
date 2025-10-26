import fs from "fs";
import path from "path";

const srcDir = path.resolve("docs/browser");
const destDir = path.resolve("docs");

if (fs.existsSync(srcDir)) {
  const files = fs.readdirSync(srcDir);
  for (const file of files) {
    const srcPath = path.join(srcDir, file);
    const destPath = path.join(destDir, file);
    fs.renameSync(srcPath, destPath);
  }
  fs.rmdirSync(srcDir);
  console.log("✅ Arquivos movidos de docs/browser para docs com sucesso!");
} else {
  console.log("⚠️ Pasta docs/browser não encontrada. Nenhuma ação necessária.");
}
