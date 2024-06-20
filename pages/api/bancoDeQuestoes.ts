import QuestaoModel from "@/model/questao";
import RespostasModel from "../../model/resposta";

const questoes: QuestaoModel[] = [
  new QuestaoModel(306, "Qual bicho transmite a Doença de Chagas?", [
    RespostasModel.errada("Abelha"),
    RespostasModel.errada("Barata"),
    RespostasModel.errada("Pulga"),
    RespostasModel.certa("Barbeiro"),
  ]),
  new QuestaoModel(
    202,
    "Qual fruto é conhecido no Norte e Nordeste como 'jerimum'?",
    [
      RespostasModel.errada("Caju"),
      RespostasModel.errada("Côco"),
      RespostasModel.errada("Chuchu"),
      RespostasModel.certa("Abóbora"),
    ]
  ),
  new QuestaoModel(203, "Qual é o coletivo de cães?", [
    RespostasModel.errada("Manada"),
    RespostasModel.errada("Alcateia"),
    RespostasModel.errada("Rebanho"),
    RespostasModel.certa("Matilha"),
  ]),
  new QuestaoModel(204, "Qual é triângulo que tem todos os lados diferentes?", [
    RespostasModel.errada("Equilátero"),
    RespostasModel.errada("Isóceles"),
    RespostasModel.errada("Trapézio"),
    RespostasModel.certa("Escaleno"),
  ]),
];

export default questoes;
