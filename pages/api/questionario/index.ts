import { embaralhar } from "@/function/arrays";
import questoes from "../bancoDeQuestoes";
import { NextApiRequest, NextApiResponse } from "next";

export default function questionario(req, res) {
  const ids = questoes.map((questao) => questao.id);
  res.status(200).json(embaralhar(ids));
}
