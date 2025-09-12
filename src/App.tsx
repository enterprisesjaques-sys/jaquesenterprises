import React, { useState, useEffect } from 'react';
import { Briefcase, Scale, Home, FileText, MessageSquarePlus, X, Mail, Phone, MessageCircle, MessageSquareText } from 'lucide-react';

// ----------------------------------------------------------------------
// 1. DADOS E CONFIGURAÇÕES CENTRALIZADAS (AGORA COM i18n)
// O conteúdo foi abstraído para um objeto de tradução (i18n).
// ----------------------------------------------------------------------

const i18nConfig = {
  en: {
    // Hero Section
    heroTitle: "Business, Legal, and Real Estate Solutions",
    heroSubtitle: "focused on the American market",
    heroDescription: "We connect expertise and innovation to drive your business success in the United States.",
    heroCta: "Explore Services ↓",
    // Services Section
    servicesTitle: "Our Services",
    servicesDescription: "We offer comprehensive solutions for businesses, legal matters, and the real estate market in the United States.",
    // Services Data
    serviceBusinessTitle: "Business Services",
    serviceBusinessDesc: "Complete advisory for companies seeking to thrive in the competitive US market.",
    serviceLegalTitle: "Legal Services",
    serviceLegalDesc: "Navigate the American legal system with confidence and legal security.",
    serviceRealEstateTitle: "Real Estate Services",
    serviceRealEstateDesc: "Solutions for buying, selling, and investing in the dynamic US real estate market.",
    serviceTaxTitle: "Tax Filing",
    serviceTaxDesc: "Complete tax services for individuals and companies in compliance with the IRS and state laws.",
    // Footer
    footerDescription: "Connecting expertise and innovation to drive your business success in the United States.",
    footerContactTitle: "Contact Us",
    footerHoursTitle: "Opening Hours",
    footerHoursDay: "Monday to Saturday",
    // Modals
    modalBusinessTitle: "Business Solutions for Massachusetts",
    modalBusinessDesc: "Navigate the complexities of doing business in Massachusetts with our expert advisory. From registration to compliance, we are here to ensure your success.",
    modalLegalTitle: "Comprehensive Legal Services in Massachusetts",
    modalLegalDesc: "We offer specialized legal representation in various areas to protect your interests in Massachusetts.",
    modalRealEstateTitle: "Real Estate Services in Massachusetts",
    modalRealEstateDesc: "We specialize in selling properties in Massachusetts. Whether you're looking for a new home or want to list your property, our team is ready to help.",
    modalTaxTitle: "Tax Preparation & Filing Services",
    modalTaxDesc: "Ensure compliance and maximize your return with our tax services for federal (IRS) and Massachusetts (DOR) laws.",
    // Generic Modal Texts
    modalDetailsButton: "View Details",
    modalFooterPromptDefault: "Ready to start?",
    modalFooterPromptLegal: "Need legal advice?",
    modalFooterPromptRealEstate: "Interested in buying or selling?",
    modalFooterPromptTax: "Questions about your taxes?",
    modalFooterContactHint: "Use the",
    modalFooterContactButton: "Request Information",
    modalFooterContactHintSuffix: "button to get in touch.",
    modalFooterCtaLegal: "for an initial consultation.",
    modalFooterCtaRealEstate: "Contact us right now!",
    // Real Estate Modal Specifics
    sellPromptTitle: "Want to Sell Your Property?",
    sellPromptDesc: "Let us introduce your home to qualified buyers. Contact us to learn more.",
    sellPromptButton: "List Your Property With Us",
    buyPromptTitle: "Find Your New Home in Massachusetts",
    buyPromptLocationPrefix: "Available in:",
    buyPromptButton: "Check Availability",
    // FAB
    fabButtonText: "REQUEST INFORMATION",
    fabEmail: "Email",
    fabCall: "Call Now",
    fabWhatsApp: "WhatsApp",
    fabSMS: "SMS",
  },
  pt: {
    // Hero Section
    heroTitle: "Soluções Empresariais, Jurídicas e Imobiliárias",
    heroSubtitle: "focadas no mercado americano",
    heroDescription: "Conectamos expertise e inovação para impulsionar seu sucesso nos negócios nos Estados Unidos.",
    heroCta: "Conheça os Serviços ↓",
    // Services Section
    servicesTitle: "Nossos Serviços",
    servicesDescription: "Oferecemos soluções completas para empresas, questões jurídicas e mercado imobiliário no território americano.",
    // Services Data
    serviceBusinessTitle: "Serviços Empresariais",
    serviceBusinessDesc: "Assessoria completa para empresas que buscam prosperar no competitivo mercado dos EUA.",
    serviceLegalTitle: "Serviços Jurídicos",
    serviceLegalDesc: "Navegue pelo sistema legal americano com confiança e segurança jurídica.",
    serviceRealEstateTitle: "Serviços Imobiliários",
    serviceRealEstateDesc: "Soluções para compra, venda e investimento no dinâmico mercado imobiliário dos EUA.",
    serviceTaxTitle: "Declaração de Impostos",
    serviceTaxDesc: "Serviços fiscais completos para pessoas físicas e empresas em conformidade com o IRS e o estado.",
    // Footer
    footerDescription: "Conectando expertise e inovação para impulsionar seu sucesso nos negócios nos Estados Unidos.",
    footerContactTitle: "Entre em Contato",
    footerHoursTitle: "Horário de Funcionamento",
    footerHoursDay: "Segunda a Sábado",
    // Modals
    modalBusinessTitle: "Soluções de Negócios para Massachusetts",
    modalBusinessDesc: "Navegue pelas complexidades de fazer negócios em Massachusetts com nossa assessoria especializada. Do registro à conformidade, estamos aqui para garantir seu sucesso.",
    modalLegalTitle: "Serviços Jurídicos Abrangentes em Massachusetts",
    modalLegalDesc: "Oferecemos representação jurídica especializada em diversas áreas para proteger seus interesses em Massachusetts.",
    modalRealEstateTitle: "Serviços Imobiliários em Massachusetts",
    modalRealEstateDesc: "Especializamo-nos na venda de imóveis em Massachusetts. Se você busca um novo lar ou deseja anunciar sua propriedade, nossa equipe está pronta para ajudar.",
    modalTaxTitle: "Serviços de Preparação de Impostos",
    modalTaxDesc: "Garanta a conformidade e maximize seu retorno com nossos serviços fiscais para leis federais (IRS) e do estado de Massachusetts (DOR).",
    // Generic Modal Texts
    modalDetailsButton: "Ver detalhes",
    modalFooterPromptDefault: "Pronto para começar?",
    modalFooterPromptLegal: "Precisa de assessoria jurídica?",
    modalFooterPromptRealEstate: "Interessado em comprar ou vender?",
    modalFooterPromptTax: "Dúvidas sobre seus impostos?",
    modalFooterContactHint: "Utilize o botão",
    modalFooterContactButton: "Solicitar Informações",
    modalFooterContactHintSuffix: "para entrar em contato.",
    modalFooterCtaLegal: "para uma consulta inicial.",
    modalFooterCtaRealEstate: "Fale conosco agora mesmo!",
    // Real Estate Modal Specifics
    sellPromptTitle: "Quer Vender Seu Imóvel?",
    sellPromptDesc: "Deixe-nos apresentar sua casa a compradores qualificados. Contate-nos para saber mais.",
    sellPromptButton: "Anuncie Seu Imóvel Conosco",
    buyPromptTitle: "Encontre Seu Novo Lar em Massachusetts",
    buyPromptLocationPrefix: "Disponíveis em:",
    buyPromptButton: "Verificar",
    // FAB
    fabButtonText: "SOLICITAR INFORMAÇÕES",
    fabEmail: "Email",
    fabCall: "Ligar Agora",
    fabWhatsApp: "WhatsApp",
    fabSMS: "SMS",
  }
};

const siteConfig = (t) => ({
  companyName: "JAQUES ENTERPRISES",
  logoUrl: "https://i.ibb.co/HfRT32Ct/9286c25c-d42a-11ef-a7a4-0242ac110002-png-regular-image.png",
  hero: {
    title: t.heroTitle,
    subtitle: t.heroSubtitle,
    description: t.heroDescription,
    cta: t.heroCta,
    backgroundImage: "url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop')"
  },
  servicesSection: {
    title: t.servicesTitle,
    description: t.servicesDescription
  },
  footer: {
    description: t.footerDescription,
    contactTitle: t.footerContactTitle,
    hoursTitle: t.footerHoursTitle,
    address: { 
      line1: "1016 Revere Beach Parkway", 
      line2: "Chelsea, MA 02150 USA", 
      url: "https://www.google.com/maps/search/?api=1&query=1016+Revere+Beach+Parkway,+Chelsea,+MA+02150" 
    },
    phone: "+1 (617) 892-3756",
    email: "customercare@jaques-enterprises.com",
    workingHours: [{ day: t.footerHoursDay, hours: "7:00 AM – 7:00 PM" }],
    copyright: `© ${new Date().getFullYear()} JAQUES ENTERPRISES. All rights reserved.`
  },
  fabLinks: (t) => [
    { 
      type: 'email', 
      Icon: Mail, 
      color: 'bg-yellow-500 hover:bg-yellow-600', 
      href: 'mailto:customercare@jaques-enterprises.com?subject=Information Request&body=Hello! I would like more information about JAQUES ENTERPRISES services.', 
      label: t.fabEmail 
    },
    { 
      type: 'call', 
      Icon: Phone, 
      color: 'bg-red-500 hover:bg-red-600', 
      href: 'tel:+16178923756', 
      label: t.fabCall 
    },
    { 
      type: 'whatsapp', 
      Icon: MessageCircle, 
      color: 'bg-green-500 hover:bg-green-600', 
      href: 'https://api.whatsapp.com/send?phone=16178923756&text=Hello!%20I%20would%20like%20more%20information%20about%20JAQUES%20ENTERPRISES%20services.', 
      label: t.fabWhatsApp 
    },
    { 
      type: 'sms', 
      Icon: MessageSquareText, 
      color: 'bg-blue-500 hover:bg-blue-600', 
      href: 'sms:+16178923756?&body=Hello! I would like more information about JAQUES ENTERPRISES services.', 
      label: t.fabSMS 
    }
  ]
});

const servicesData = (t) => [
  { id: 'business', icon: Briefcase, title: t.serviceBusinessTitle, description: t.serviceBusinessDesc },
  { id: 'legal', icon: Scale, title: t.serviceLegalTitle, description: t.serviceLegalDesc },
  { id: 'realestate', icon: Home, title: t.serviceRealEstateTitle, description: t.serviceRealEstateDesc },
  { id: 'tax', icon: FileText, title: t.serviceTaxTitle, description: t.serviceTaxDesc }
];

const modalsData = (t) => ({
  business: { 
    title: t.modalBusinessTitle, 
    description: t.modalBusinessDesc, 
    items: [
      { 
        title: "MA Business Formation", 
        description: "Guidance on choosing and registering your entity (LLC, S-Corp, C-Corp) with the Massachusetts Secretary of the Commonwealth." 
      }, 
      { 
        title: "State & Federal Tax Compliance", 
        description: "Ensure tax compliance with the MA Department of Revenue (DOR) and the IRS, including sales and corporate tax." 
      }, 
      { 
        title: "Industry-Specific Strategy", 
        description: "Development of entry strategies for key MA sectors like tech, biotech, and finance." 
      }, 
      { 
        title: "MA Labor Law & HR Consulting", 
        description: "Navigate MA labor laws, including PFML, and structure your HR for success." 
      }, 
      { 
        title: "Local Licensing & Permits", 
        description: "Assistance in obtaining necessary licenses and permits at the state and municipal levels (Boston, Cambridge, etc.)." 
      }, 
      { 
        title: "Startup Funding Strategy", 
        description: "Connecting Boston ecosystem startups to fundraising strategies, from angels to VCs." 
      } 
    ], 
    footerPrompt: t.modalFooterPromptDefault 
  },
  legal: { 
    title: t.modalLegalTitle, 
    description: t.modalLegalDesc, 
    items: [
      { 
        title: "Real Estate Law", 
        description: "Advisory on purchase, sale, lease, and real estate litigation." 
      }, 
      { 
        title: "Estate Planning", 
        description: "Drafting of wills, trusts, and powers of attorney to protect your assets." 
      }, 
      { 
        title: "Family Law", 
        description: "Representation in divorce, child custody, and alimony cases." 
      }, 
      { 
        title: "Personal Injury", 
        description: "Defense for victims of car accidents, falls, and negligence." 
      }, 
      { 
        title: "Business Law", 
        description: "Consulting on company formation, contracts, and commercial transactions." 
      }, 
      { 
        title: "Immigration Law", 
        description: "Assistance with visas, green cards, and citizenship processes." 
      }, 
      { 
        title: "Criminal Defense", 
        description: "Robust defense for criminal charges, from infractions to serious felonies." 
      }, 
      { 
        title: "Employment Law", 
        description: "Advisory on discrimination, wages, hours, and employment contracts." 
      }, 
      { 
        title: "Bankruptcy Law", 
        description: "Guidance on bankruptcy proceedings for individuals and businesses." 
      }, 
      { 
        title: "Workers' Compensation", 
        description: "Helping workers obtain benefits for work-related injuries." 
      }, 
      { 
        title: "Civil Litigation", 
        description: "Representation in contractual, property, and other civil disputes." 
      }, 
      { 
        title: "Landlord-Tenant Law", 
        description: "Advisory for landlords and tenants in lease disputes." 
      }, 
      { 
        title: "Intellectual Property", 
        description: "Protection of trademarks, copyrights, and trade secrets." 
      }, 
      { 
        title: "Tax Law", 
        description: "Resolution of tax controversies with the IRS and MA DOR." 
      }, 
      { 
        title: "Medical Malpractice", 
        description: "Representation for patients in cases of medical error and negligence." 
      } 
    ], 
    footerPrompt: t.modalFooterPromptLegal, 
    footerCta: t.modalFooterCtaLegal 
  },
  realestate: { 
    title: t.modalRealEstateTitle, 
    description: t.modalRealEstateDesc, 
    isSpecialLayout: true, 
    sellPrompt: { 
      title: t.sellPromptTitle, 
      description: t.sellPromptDesc, 
      buttonText: t.sellPromptButton 
    }, 
    buyPrompt: { 
      title: t.buyPromptTitle, 
      locations: ["Boston", "Cambridge", "Salem", "Worcester", "Springfield", "Lowell"] 
    }, 
    footerPrompt: t.modalFooterPromptRealEstate, 
    footerCta: t.modalFooterCtaRealEstate 
  },
  tax: { 
    title: t.modalTaxTitle, 
    description: t.modalTaxDesc, 
    items: [
      { 
        title: "Individual Tax Returns (1040)", 
        description: "Preparation of personal income tax returns, including all applicable deductions and credits." 
      }, 
      { 
        title: "Business Tax Returns", 
        description: "Services for LLCs, S-Corps, and C-Corps, ensuring correct corporate tax filing." 
      }, 
      { 
        title: "MA State Tax Filing", 
        description: "Full compliance with the Massachusetts Department of Revenue for individuals and businesses." 
      }, 
      { 
        title: "ITIN Number Application", 
        description: "Complete assistance for non-residents who need an ITIN to file taxes in the US." 
      }, 
      { 
        title: "Tax Planning & Strategy", 
        description: "Year-round strategic consulting to legally minimize your tax burden." 
      }, 
      { 
        title: "IRS & State Audit Support", 
        description: "Expert representation and support in case of tax notices or audits." 
      } 
    ], 
    footerPrompt: t.modalFooterPromptTax 
  }
});

// ----------------------------------------------------------------------
// 2. COMPONENTES DE UI REUTILIZÁVEIS
// ----------------------------------------------------------------------

const ServiceCard = ({ icon: Icon, title, description, onButtonClick, detailsText }) => (
  <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 flex flex-col items-center hover:border-green-400 hover:scale-105 transition-all duration-300 text-center">
    <div className="bg-gray-700 p-4 rounded-full mb-6">
      <Icon className="w-8 h-8 text-green-400" />
    </div>
    <h3 className="text-2xl font-semibold mb-4">{title}</h3>
    <p className="text-gray-400 mb-6 flex-grow">{description}</p>
    <button 
      onClick={onButtonClick} 
      className="bg-transparent border-2 border-green-500 rounded-full text-green-400 font-semibold py-2 px-6 hover:bg-green-500 hover:text-white transition-colors duration-300 mt-auto"
    >
      {detailsText}
    </button>
  </div>
);

const Modal = ({ isOpen, onClose, data, onFabTrigger, t }) => {
  useEffect(() => {
    const handleEsc = (event) => event.key === 'Escape' && onClose();
    if (isOpen) document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !data) return null;

  const ModalFooter = ({ prompt, cta }) => (
    <div className="text-center mt-8 p-6 bg-gray-800/50 rounded-lg">
      <h3 className="text-2xl font-bold mb-4">{prompt}</h3>
      <p className="text-lg text-gray-300">
        {cta || t.modalFooterContactHint} <span className="font-semibold text-green-400">{t.modalFooterContactButton}</span> {!cta && t.modalFooterContactHintSuffix}
      </p>
    </div>
  );

  const RealEstateContent = () => (
    <>
      <div className="bg-gray-800 p-6 rounded-lg mb-8 text-center border border-gray-700">
        <h3 className="text-2xl font-semibold mb-3">{data.sellPrompt.title}</h3>
        <p className="text-gray-400 mb-4">{data.sellPrompt.description}</p>
        <button 
          onClick={() => { onFabTrigger(); onClose(); }} 
          className="inline-block bg-green-600 rounded-full text-white font-semibold py-2 px-6 hover:bg-green-700 transition-colors duration-300"
        >
          {data.sellPrompt.buttonText}
        </button>
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-6 text-center">{data.buyPrompt.title}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 text-left">
          {data.buyPrompt.locations.map(city => (
            <div key={city} className="bg-gray-800/50 p-4 rounded-lg flex flex-col justify-between border border-gray-700">
              <h4 className="text-xl font-semibold mb-3 text-white">{t.buyPromptLocationPrefix} {city}</h4>
              <button 
                onClick={() => { onFabTrigger(); onClose(); }} 
                className="bg-transparent border-2 border-green-500 rounded-full text-green-400 font-semibold py-2 px-4 hover:bg-green-500 hover:text-white text-center transition-colors duration-300 mt-auto"
              >
                {t.buyPromptButton}
              </button>
            </div>
          ))}
        </div>
      </div>
      <ModalFooter prompt={data.footerPrompt} cta={data.footerCta} />
    </>
  );

  const DefaultContent = () => (
    <>
      <div className={`grid grid-cols-1 md:grid-cols-2 ${data.items.length > 6 ? 'lg:grid-cols-3' : ''} gap-4 md:gap-6 mb-8 text-left`}>
        {data.items.map(item => (
          <div key={item.title} className="bg-gray-800 p-4 rounded-lg">
            <h3 className={`text-lg ${data.items.length > 6 ? '' : 'md:text-xl'} font-semibold mb-1`}>{item.title}</h3>
            <p className={`text-gray-400 ${data.items.length > 6 ? 'text-sm' : ''}`}>{item.description}</p>
          </div>
        ))}
      </div>
      <ModalFooter prompt={data.footerPrompt} cta={data.footerCta} />
    </>
  );

  return (
    <div 
      onClick={onClose} 
      className={`fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    >
      <div 
        onClick={(e) => e.stopPropagation()} 
        className={`bg-gray-900 rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto p-6 md:p-8 transform transition-all duration-300 ${isOpen ? 'scale-100' : 'scale-95'}`}
      >
        <div className="flex justify-between items-center border-b border-gray-700 pb-4 mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-green-400">{data.title}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X size={32} />
          </button>
        </div>
        <p className="text-lg text-gray-300 mb-8">{data.description}</p>
        {data.isSpecialLayout ? <RealEstateContent /> : <DefaultContent />}
      </div>
    </div>
  );
};

// ----------------------------------------------------------------------
// 3. COMPONENTES ESPECÍFICOS DA PÁGINA
// ----------------------------------------------------------------------

const LanguageSwitcher = ({ currentLang, setLang }) => (
  <div className="flex items-center space-x-2">
    <button 
      onClick={() => setLang('en')} 
      className={`px-3 py-1 text-sm rounded-md transition-colors ${currentLang === 'en' ? 'bg-green-500 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
    >
      EN
    </button>
    <button 
      onClick={() => setLang('pt')} 
      className={`px-3 py-1 text-sm rounded-md transition-colors ${currentLang === 'pt' ? 'bg-green-500 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
    >
      PT
    </button>
  </div>
);

const Navbar = ({ companyName, logoUrl, lang, setLang }) => (
  <nav className="fixed top-0 left-0 right-0 z-30 p-4">
    <div className="container mx-auto flex justify-between items-center">
      <a href="#">
        <img src={logoUrl} alt={`${companyName} Logo`} className="h-12 w-auto" />
      </a>
      <LanguageSwitcher currentLang={lang} setLang={setLang} />
    </div>
  </nav>
);

const HeroSection = ({ content }) => (
  <header 
    className="relative bg-cover bg-center min-h-screen flex items-center justify-center text-white" 
    style={{ backgroundImage: content.backgroundImage }}
  >
    <div className="absolute inset-0 bg-black/70 z-10"></div>
    <div className="relative z-20 text-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold leading-tight">{content.title}</h1>
      <h2 className="text-4xl md:text-6xl font-bold text-green-400 mt-2 mb-4">{content.subtitle}</h2>
      <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">{content.description}</p>
      <a 
        href="#services" 
        className="inline-block bg-transparent border-2 border-white rounded-full font-semibold py-3 px-8 hover:bg-white hover:text-black transition-colors duration-300 w-full sm:w-auto"
      >
        {content.cta}
      </a>
    </div>
  </header>
);

const ServicesSection = ({ content, data, onCardClick, t }) => (
  <main id="services" className="py-20 md:py-28 px-4">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-3">{content.title}</h2>
      <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-12">{content.description}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
        {data.map(service => (
          <ServiceCard 
            key={service.id} 
            {...service} 
            onButtonClick={() => onCardClick(service.id)} 
            detailsText={t.modalDetailsButton} 
          />
        ))}
      </div>
    </div>
  </main>
);

const Footer = ({ content }) => (
  <footer id="contact-info" className="bg-gray-900 text-gray-400 pt-16 pb-8 px-4">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
      <div>
        <img 
          src={siteConfig(i18nConfig.en).logoUrl} 
          alt={`${siteConfig(i18nConfig.en).companyName} Logo`} 
          className="h-10 w-auto mx-auto md:mx-0 mb-4" 
        />
        <p>{content.description}</p>
      </div>
      <div>
        <h4 className="text-lg font-semibold text-white mb-4">{content.contactTitle}</h4>
        <address className="not-italic">
          <p className="mb-2">
            <a 
              href={content.address.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-green-400"
            >
              {content.address.line1}<br />{content.address.line2}
            </a>
          </p>
          <p className="mb-2">
            <a href={`tel:${content.phone}`} className="hover:text-green-400">{content.phone}</a>
          </p>
          <p>
            <a href={`mailto:${content.email}`} className="hover:text-green-400">{content.email}</a>
          </p>
        </address>
      </div>
      <div>
        <h4 className="text-lg font-semibold text-white mb-4">{content.hoursTitle}</h4>
        <ul>
          {content.workingHours.map(item => (
            <li key={item.day} className="flex justify-center md:justify-start">
              <span>{item.day}:</span>
              <span className="ml-2">{item.hours}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <div className="border-t border-gray-800 mt-12 pt-6 text-center">
      <p className="text-gray-500">{content.copyright}</p>
    </div>
  </footer>
);

const FloatingActionButton = ({ onToggle, isOpen, links, buttonText }) => (
  <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
    <div className={`flex flex-col items-end space-y-3 mb-3 transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
      {links.map(({ type, Icon, color, href, label }) => (
        <a key={type} href={href} target="_blank" rel="noopener noreferrer" className="flex items-center group">
          <span className="mr-4 bg-white text-gray-800 text-sm font-semibold px-4 py-2 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
            {label}
          </span>
          <div className={`${color} w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg`} title={label}>
            <Icon size={24} />
          </div>
        </a>
      ))}
    </div>
    <button 
      onClick={onToggle} 
      className="bg-green-500 text-white w-auto h-16 rounded-full flex items-center justify-center shadow-xl hover:bg-green-600 focus:outline-none px-6 py-4"
    >
      <span className="font-semibold text-lg">{buttonText}</span>
      <div className="ml-4 text-xl transition-transform duration-300">
        {isOpen ? <X size={24} /> : <MessageSquarePlus size={24} />}
      </div>
    </button>
  </div>
);

// ----------------------------------------------------------------------
// 4. COMPONENTE PRINCIPAL APP
// ----------------------------------------------------------------------

export default function App() {
  const [language, setLanguage] = useState('en');
  const [activeModalId, setActiveModalId] = useState(null);
  const [isFabOpen, setIsFabOpen] = useState(false);

  const handleOpenModal = (modalId) => setActiveModalId(modalId);
  const handleCloseModal = () => setActiveModalId(null);
  const toggleFab = () => setIsFabOpen(prev => !prev);
  
  const triggerFabOpen = () => !isFabOpen && setIsFabOpen(true);

  useEffect(() => { 
    document.documentElement.style.scrollBehavior = 'smooth'; 
  }, []);

  const t = i18nConfig[language];
  const currentSiteConfig = siteConfig(t);
  const currentServicesData = servicesData(t);
  const currentModalsData = modalsData(t);
  const currentFabLinks = siteConfig(t).fabLinks(t);

  const modalData = activeModalId ? currentModalsData[activeModalId] : null;

  return (
    <div className="bg-gray-900 text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Navbar 
        companyName={currentSiteConfig.companyName}
        logoUrl={currentSiteConfig.logoUrl}
        lang={language}
        setLang={setLanguage}
      />
      <HeroSection content={currentSiteConfig.hero} />
      <ServicesSection 
        content={currentSiteConfig.servicesSection} 
        data={currentServicesData}
        onCardClick={handleOpenModal}
        t={t}
      />
      <Footer content={currentSiteConfig.footer} />
      <FloatingActionButton 
        onToggle={toggleFab} 
        isOpen={isFabOpen} 
        links={currentFabLinks}
        buttonText={t.fabButtonText}
      />
      <Modal 
        isOpen={!!activeModalId} 
        onClose={handleCloseModal} 
        data={modalData} 
        onFabTrigger={triggerFabOpen}
        t={t}
      />
    </div>
  );
}