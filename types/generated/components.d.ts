import type { Schema, Attribute } from '@strapi/strapi';

export interface SharedSocialNetwork extends Schema.Component {
  collectionName: 'components_shared_social_networks';
  info: {
    displayName: 'socialNetwork';
  };
  attributes: {
    url: Attribute.String & Attribute.Required;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
  };
  attributes: {
    metaTiltle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media<'images' | 'files' | 'videos'> &
      Attribute.Required;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook']> & Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media<'images' | 'videos' | 'files'>;
  };
}

export interface SharedHeader extends Schema.Component {
  collectionName: 'components_shared_headers';
  info: {
    displayName: 'Header';
    description: '';
  };
  attributes: {
    theme: Attribute.Enumeration<['primary', 'secondary', 'muted']> &
      Attribute.DefaultTo<'primary'>;
    label: Attribute.String;
    title: Attribute.String & Attribute.Required;
  };
}

export interface SharedButton extends Schema.Component {
  collectionName: 'components_shared_buttons';
  info: {
    displayName: 'button';
    description: '';
  };
  attributes: {
    theme: Attribute.Enumeration<['primary', 'secondary', 'muted']> &
      Attribute.Required &
      Attribute.DefaultTo<'primary'>;
    link: Attribute.Component<'blocks.link'>;
  };
}

export interface BlocksRelatedArticles extends Schema.Component {
  collectionName: 'components_blocks_related_articles';
  info: {
    displayName: 'RelatedArticles';
    description: '';
  };
  attributes: {
    Header: Attribute.Component<'shared.header'>;
    articles: Attribute.Relation<
      'blocks.related-articles',
      'oneToMany',
      'api::article.article'
    >;
  };
}

export interface BlocksLink extends Schema.Component {
  collectionName: 'components_blocks_links';
  info: {
    displayName: 'link';
  };
  attributes: {
    href: Attribute.String & Attribute.Required;
    label: Attribute.String & Attribute.Required;
    target: Attribute.Enumeration<['_blank']>;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface BlocksHeader extends Schema.Component {
  collectionName: 'components_blocks_headers';
  info: {
    displayName: 'header';
  };
  attributes: {
    theme: Attribute.Enumeration<['primary', 'secondary', 'muted']> &
      Attribute.DefaultTo<'primary'>;
  };
}

export interface BlocksCta extends Schema.Component {
  collectionName: 'components_blocks_ctas';
  info: {
    displayName: 'cta';
    description: '';
  };
  attributes: {
    theme: Attribute.Enumeration<['primary', 'secondary', 'muted']> &
      Attribute.DefaultTo<'muted'>;
    title: Attribute.String;
    text: Attribute.String;
    buttons: Attribute.Component<'shared.button', true>;
  };
}

export interface BlocksCtaCommandLine extends Schema.Component {
  collectionName: 'components_blocks_cta_command_lines';
  info: {
    displayName: 'ctaCommandLine';
    description: '';
  };
  attributes: {
    theme: Attribute.Enumeration<['primary', 'secondary', 'muted']> &
      Attribute.DefaultTo<'primary'>;
    title: Attribute.String;
    text: Attribute.String;
    commandLine: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.social-network': SharedSocialNetwork;
      'shared.seo': SharedSeo;
      'shared.meta-social': SharedMetaSocial;
      'shared.header': SharedHeader;
      'shared.button': SharedButton;
      'blocks.related-articles': BlocksRelatedArticles;
      'blocks.link': BlocksLink;
      'blocks.header': BlocksHeader;
      'blocks.cta': BlocksCta;
      'blocks.cta-command-line': BlocksCtaCommandLine;
    }
  }
}
