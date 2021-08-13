import api from "./api";

export const ServiceEmpreendimentos = {
  getAllEmpreendimentos: filters => {
    return api.get("/empreendimento", {params: {...filters}});
  },
  getEmpreendimentoPorSlug: empreendimentoSlug => {
    return api.get(`/empreendimento/getEmpreendimentoPorSlug/${empreendimentoSlug}`);
  },
  getEmpreendimentoPorId: empreendimentoId => {
    return api.get(`/empreendimento/getEmpreendimentoPorId/${empreendimentoId}`);
  },
  saveEmpreendimento: data => {
    return api.post('/empreendimento', {...data})
  },
  deleteEmpreendimento: empreendimentoId => {
    return api.delete(`/empreendimento/${empreendimentoId}`);
  }
};
