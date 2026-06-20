import type { Schema, Struct } from '@strapi/strapi';

export interface PaginasBanner extends Struct.ComponentSchema {
  collectionName: 'components_paginas_banners';
  info: {
    displayName: 'Banner';
    icon: 'picture';
  };
  attributes: {
    cta: Schema.Attribute.Component<'shared.botao-acao', false>;
    descricao: Schema.Attribute.Text;
    imagem: Schema.Attribute.Media<'images'>;
    titulo: Schema.Attribute.String;
  };
}

export interface PaginasIntroducao extends Struct.ComponentSchema {
  collectionName: 'components_paginas_introducoes';
  info: {
    displayName: 'Introdu\u00E7\u00E3o';
    icon: 'align-left';
  };
  attributes: {
    anos: Schema.Attribute.Integer;
    cta: Schema.Attribute.Component<'shared.botao-acao', false>;
    descricao: Schema.Attribute.Text;
    imagem: Schema.Attribute.Media<'images'>;
    sobrancelha: Schema.Attribute.String;
    titulo: Schema.Attribute.String;
  };
}

export interface PaginasSeccaoPorque extends Struct.ComponentSchema {
  collectionName: 'components_paginas_seccao_porques';
  info: {
    displayName: 'Sec\u00E7\u00E3o Porqu\u00EA';
    icon: 'question';
  };
  attributes: {
    caracteristicas: Schema.Attribute.Component<'shared.caracteristica', true>;
    descricao: Schema.Attribute.Text;
    imagem: Schema.Attribute.Media<'images'>;
    sobrancelha: Schema.Attribute.String;
    titulo: Schema.Attribute.String;
  };
}

export interface PaginasSeccaoSobre extends Struct.ComponentSchema {
  collectionName: 'components_paginas_seccao_sobres';
  info: {
    displayName: 'Sec\u00E7\u00E3o Sobre';
    icon: 'information';
  };
  attributes: {
    anosExperiencia: Schema.Attribute.Integer;
    cta: Schema.Attribute.Component<'shared.botao-acao', false>;
    descricao: Schema.Attribute.Text;
    imagem: Schema.Attribute.Media<'images'>;
    sobrancelha: Schema.Attribute.String;
    titulo: Schema.Attribute.String;
  };
}

export interface SharedBlocoImagem extends Struct.ComponentSchema {
  collectionName: 'components_shared_bloco_imagems';
  info: {
    description: '';
    displayName: 'Bloco de Imagem';
    icon: 'picture';
    name: 'BlocoImagem';
  };
  attributes: {
    alt: Schema.Attribute.String;
    imagem: Schema.Attribute.Media<'images'>;
    legenda: Schema.Attribute.String;
  };
}

export interface SharedBotaoAcao extends Struct.ComponentSchema {
  collectionName: 'components_shared_botao_acaos';
  info: {
    description: '';
    displayName: 'Bot\u00E3o de A\u00E7\u00E3o';
    icon: 'cursor';
    name: 'BotaoAcao';
  };
  attributes: {
    link: Schema.Attribute.String;
    texto: Schema.Attribute.String;
  };
}

export interface SharedCaracteristica extends Struct.ComponentSchema {
  collectionName: 'components_shared_caracteristicas';
  info: {
    description: '';
    displayName: 'Caracter\u00EDstica';
    icon: 'star';
    name: 'Caracteristica';
  };
  attributes: {
    descricao: Schema.Attribute.String;
    icone: Schema.Attribute.Enumeration<
      [
        'sprout',
        'leaf',
        'apple',
        'check',
        'users',
        'award',
        'headphones',
        'shield',
        'wrench',
        'credit-card',
        'settings',
        'message',
        'tag',
        'help',
        'flask',
        'heart',
      ]
    >;
    titulo: Schema.Attribute.String;
  };
}

export interface SharedCartaoServico extends Struct.ComponentSchema {
  collectionName: 'components_shared_cartao_servicos';
  info: {
    description: '';
    displayName: 'Cart\u00E3o de Servi\u00E7o';
    icon: 'layer';
    name: 'CartaoServico';
  };
  attributes: {
    descricao: Schema.Attribute.Text;
    icone: Schema.Attribute.Enumeration<
      [
        'sprout',
        'leaf',
        'apple',
        'check',
        'users',
        'award',
        'headphones',
        'shield',
        'wrench',
        'credit-card',
        'settings',
        'message',
        'tag',
        'help',
        'flask',
        'heart',
      ]
    >;
    imagem: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.Component<'shared.botao-acao', false>;
    titulo: Schema.Attribute.String;
  };
}

export interface SharedEstatistica extends Struct.ComponentSchema {
  collectionName: 'components_shared_estatisticas';
  info: {
    description: '';
    displayName: 'Estat\u00EDstica';
    icon: 'chartBubble';
    name: 'Estatistica';
  };
  attributes: {
    rotulo: Schema.Attribute.String;
    valor: Schema.Attribute.String;
  };
}

export interface SharedFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_faq_items';
  info: {
    description: '';
    displayName: 'Item FAQ';
    icon: 'question';
    name: 'FaqItem';
  };
  attributes: {
    categoria: Schema.Attribute.Relation<
      'manyToOne',
      'api::categoria-faq.categoria-faq'
    >;
    pergunta: Schema.Attribute.String;
    resposta: Schema.Attribute.RichText;
  };
}

export interface SharedHero extends Struct.ComponentSchema {
  collectionName: 'components_shared_heroes';
  info: {
    description: '';
    displayName: 'Hero';
    icon: 'picture';
    name: 'Hero';
  };
  attributes: {
    imagem: Schema.Attribute.Media<'images'>;
    subtitulo: Schema.Attribute.String;
    titulo: Schema.Attribute.String;
  };
}

export interface SharedInfoContacto extends Struct.ComponentSchema {
  collectionName: 'components_shared_info_contactos';
  info: {
    description: '';
    displayName: 'Contacto';
    icon: 'phone';
    name: 'InfoContacto';
  };
  attributes: {
    rotulo: Schema.Attribute.String;
    tipo: Schema.Attribute.Enumeration<['morada', 'email', 'telefone']>;
    valor: Schema.Attribute.Text;
  };
}

export interface SharedLinkMenu extends Struct.ComponentSchema {
  collectionName: 'components_shared_link_menus';
  info: {
    description: '';
    displayName: 'Link de Menu';
    icon: 'link';
    name: 'LinkMenu';
  };
  attributes: {
    rotulo: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRedeSocial extends Struct.ComponentSchema {
  collectionName: 'components_shared_rede_sociais';
  info: {
    description: '';
    displayName: 'Rede Social';
    icon: 'earth';
    name: 'RedeSocial';
  };
  attributes: {
    plataforma: Schema.Attribute.Enumeration<
      ['facebook', 'instagram', 'twitter', 'youtube', 'linkedin']
    >;
    url: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'SEO';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    descricaoMeta: Schema.Attribute.Text;
    imagemOg: Schema.Attribute.Media<'images'>;
    tituloMeta: Schema.Attribute.String;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'paginas.banner': PaginasBanner;
      'paginas.introducao': PaginasIntroducao;
      'paginas.seccao-porque': PaginasSeccaoPorque;
      'paginas.seccao-sobre': PaginasSeccaoSobre;
      'shared.bloco-imagem': SharedBlocoImagem;
      'shared.botao-acao': SharedBotaoAcao;
      'shared.caracteristica': SharedCaracteristica;
      'shared.cartao-servico': SharedCartaoServico;
      'shared.estatistica': SharedEstatistica;
      'shared.faq-item': SharedFaqItem;
      'shared.hero': SharedHero;
      'shared.info-contacto': SharedInfoContacto;
      'shared.link-menu': SharedLinkMenu;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rede-social': SharedRedeSocial;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
