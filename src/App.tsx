import React, { useState, useEffect } from 'react';
import { Briefcase, Scale, Home, FileText, MessageSquarePlus, X, Mail, Phone, MessageCircle, MessageSquareText } from 'lucide-react';

// ----------------------------------------------------------------------
// 1. DADOS E CONFIGURAÇÕES CENTRALIZADAS (AGORA COM i18n COMPLETO)
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
    modalFooterContactHint: "Contact us through:",
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
    // Business Modal Items
    businessItem1Title: "MA Business Formation",
    businessItem1Desc: "Guidance on choosing and registering your entity (LLC, S-Corp, C-Corp) with the Massachusetts Secretary of the Commonwealth.",
    businessItem2Title: "State & Federal Tax Compliance",
    businessItem2Desc: "Ensure tax compliance with the MA Department of Revenue (DOR) and the IRS, including sales and corporate tax.",
    businessItem3Title: "Industry-Specific Strategy",
    businessItem3Desc: "Development of entry strategies for key MA sectors like tech, biotech, and finance.",
    businessItem4Title: "MA Labor Law & HR Consulting",
    businessItem4Desc: "Navigate MA labor laws, including PFML, and structure your HR for success.",
    businessItem5Title: "Local Licensing & Permits",
    businessItem5Desc: "Assistance in obtaining necessary licenses and permits at the state and municipal levels (Boston, Cambridge, etc.).",
    businessItem6Title: "Startup Funding Strategy",
    businessItem6Desc: "Connecting Boston ecosystem startups to fundraising strategies, from angels to VCs.",
    // Legal Modal Items
    legalItem1Title: "Real Estate Law",
    legalItem1Desc: "Advisory on purchase, sale, lease, and real estate litigation.",
    legalItem2Title: "Estate Planning",
    legalItem2Desc: "Drafting of wills, trusts, and powers of attorney to protect your assets.",
    legalItem3Title: "Family Law",
    legalItem3Desc: "Representation in divorce, child custody, and alimony cases.",
    legalItem4Title: "Personal Injury",
    legalItem4Desc: "Defense for victims of car accidents, falls, and negligence.",
    legalItem5Title: "Business Law",
    legalItem5Desc: "Consulting on company formation, contracts, and commercial transactions.",
    legalItem6Title: "Immigration Law",
    legalItem6Desc: "Assistance with visas, green cards, and citizenship processes.",
    legalItem7Title: "Criminal Defense",
    legalItem7Desc: "Robust defense for criminal charges, from infractions to serious felonies.",
    legalItem8Title: "Employment Law",
    legalItem8Desc: "Advisory on discrimination, wages, hours, and employment contracts.",
    legalItem9Title: "Bankruptcy Law",
    legalItem9Desc: "Guidance on bankruptcy proceedings for individuals and businesses.",
    legalItem10Title: "Workers' Compensation",
    legalItem10Desc: "Helping workers obtain benefits for work-related injuries.",
    legalItem11Title: "Civil Litigation",
    legalItem11Desc: "Representation in contractual, property, and other civil disputes.",
    legalItem12Title: "Landlord-Tenant Law",
    legalItem12Desc: "Advisory for landlords and tenants in lease disputes.",
    legalItem13Title: "Intellectual Property",
    legalItem13Desc: "Protection of trademarks, copyrights, and trade secrets.",
    legalItem14Title: "Tax Law",
    legalItem14Desc: "Resolution of tax controversies with the IRS and MA DOR.",
    legalItem15Title: "Medical Malpractice",
    legalItem15Desc: "Representation for patients in cases of medical error and negligence.",
    // Tax Modal Items
    taxItem1Title: "Individual Tax Returns (1040)",
    taxItem1Desc: "Preparation of personal income tax returns, including all applicable deductions and credits.",
    taxItem2Title: "Business Tax Returns",
    taxItem2Desc: "Services for LLCs, S-Corps, and C-Corps, ensuring correct corporate tax filing.",
    taxItem3Title: "MA State Tax Filing",
    taxItem3Desc: "Full compliance with the Massachusetts Department of Revenue for individuals and businesses.",
    taxItem4Title: "ITIN Number Application",
    taxItem4Desc: "Complete assistance for non-residents who need an ITIN to file taxes in the US.",
    taxItem5Title: "Tax Planning & Strategy",
    taxItem5Desc: "Year-round strategic consulting to legally minimize your tax burden.",
    taxItem6Title: "IRS & State Audit Support",
    taxItem6Desc: "Expert representation and support in case of tax notices or audits.",
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
    modalFooterContactHint: "Entre em contato através de:",
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
    // Business Modal Items
    businessItem1Title: "Formação de Empresas em MA",
    businessItem1Desc: "Orientação na escolha e registro de sua entidade (LLC, S-Corp, C-Corp) junto ao Secretário de Estado de Massachusetts.",
    businessItem2Title: "Conformidade Fiscal Estadual e Federal",
    businessItem2Desc: "Garanta a conformidade fiscal com o Departamento de Receita de MA (DOR) e o IRS, incluindo impostos sobre vendas e corporativos.",
    businessItem3Title: "Estratégia Específica por Setor",
    businessItem3Desc: "Desenvolvimento de estratégias de entrada para setores-chave de MA como tecnologia, biotecnologia e finanças.",
    businessItem4Title: "Lei Trabalhista de MA e Consultoria de RH",
    businessItem4Desc: "Navegue pelas leis trabalhistas de MA, incluindo PFML, e estruture seu RH para o sucesso.",
    businessItem5Title: "Licenças e Autorizações Locais",
    businessItem5Desc: "Assistência na obtenção de licenças e autorizações necessárias nos níveis estadual e municipal (Boston, Cambridge, etc.).",
    businessItem6Title: "Estratégia de Financiamento para Startups",
    businessItem6Desc: "Conectando startups do ecossistema de Boston a estratégias de captação de recursos, de anjos a VCs.",
    // Legal Modal Items
    legalItem1Title: "Direito Imobiliário",
    legalItem1Desc: "Assessoria em compra, venda, locação e litígios imobiliários.",
    legalItem2Title: "Planejamento Sucessório",
    legalItem2Desc: "Elaboração de testamentos, trusts e procurações para proteger seus bens.",
    legalItem3Title: "Direito de Família",
    legalItem3Desc: "Representação em casos de divórcio, guarda de filhos e pensão alimentícia.",
    legalItem4Title: "Lesões Pessoais",
    legalItem4Desc: "Defesa para vítimas de acidentes de carro, quedas e negligência.",
    legalItem5Title: "Direito Empresarial",
    legalItem5Desc: "Consultoria em formação de empresas, contratos e transações comerciais.",
    legalItem6Title: "Direito de Imigração",
    legalItem6Desc: "Assistência com vistos, green cards e processos de cidadania.",
    legalItem7Title: "Defesa Criminal",
    legalItem7Desc: "Defesa robusta para acusações criminais, desde infrações até crimes graves.",
    legalItem8Title: "Direito Trabalhista",
    legalItem8Desc: "Assessoria sobre discriminação, salários, horários e contratos de trabalho.",
    legalItem9Title: "Direito Falimentar",
    legalItem9Desc: "Orientação em processos de falência para pessoas físicas e empresas.",
    legalItem10Title: "Compensação de Trabalhadores",
    legalItem10Desc: "Ajudando trabalhadores a obter benefícios por lesões relacionadas ao trabalho.",
    legalItem11Title: "Litígio Civil",
    legalItem11Desc: "Representação em disputas contratuais, imobiliárias e outras disputas civis.",
    legalItem12Title: "Lei do Proprietário-Inquilino",
    legalItem12Desc: "Assessoria para proprietários e inquilinos em disputas de locação.",
    legalItem13Title: "Propriedade Intelectual",
    legalItem13Desc: "Proteção de marcas registradas, direitos autorais e segredos comerciais.",
    legalItem14Title: "Direito Tributário",
    legalItem14Desc: "Resolução de controvérsias fiscais com o IRS e MA DOR.",
    legalItem15Title: "Erro Médico",
    legalItem15Desc: "Representação para pacientes em casos de erro médico e negligência.",
    // Tax Modal Items
    taxItem1Title: "Declarações de Imposto Individual (1040)",
    taxItem1Desc: "Preparação de declarações de imposto de renda pessoal, incluindo todas as deduções e créditos aplicáveis.",
    taxItem2Title: "Declarações de Imposto Empresarial",
    taxItem2Desc: "Serviços para LLCs, S-Corps e C-Corps, garantindo o correto preenchimento de impostos corporativos.",
    taxItem3Title: "Declaração de Imposto Estadual de MA",
    taxItem3Desc: "Conformidade total com o Departamento de Receita de Massachusetts para pessoas físicas e empresas.",
    taxItem4Title: "Solicitação de Número ITIN",
    taxItem4Desc: "Assistência completa para não-residentes que precisam de um ITIN para declarar impostos nos EUA.",
    taxItem5Title: "Planejamento e Estratégia Fiscal",
    taxItem5Desc: "Consultoria estratégica durante todo o ano para minimizar legalmente sua carga tributária.",
    taxItem6Title: "Suporte a Auditorias do IRS e Estaduais",
    taxItem6Desc: "Representação especializada e suporte em caso de notificações fiscais ou auditorias.",
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
      { title: t.businessItem1Title, description: t.businessItem1Desc },
      { title: t.businessItem2Title, description: t.businessItem2Desc },
      { title: t.businessItem3Title, description: t.businessItem3Desc },
      { title: t.businessItem4Title, description: t.businessItem4Desc },
      { title: t.businessItem5Title, description: t.businessItem5Desc },
      { title: t.businessItem6Title, description: t.businessItem6Desc }
    ], 
    footerPrompt: t.modalFooterPromptDefault 
  },
  legal: { 
    title: t.modalLegalTitle, 
    description: t.modalLegalDesc, 
    items: [
      { title: t.legalItem1Title, description: t.legalItem1Desc },
      { title: t.legalItem2Title, description: t.legalItem2Desc },
      { title: t.legalItem3Title, description: t.legalItem3Desc },
      { title: t.legalItem4Title, description: t.legalItem4Desc },
      { title: t.legalItem5Title, description: t.legalItem5Desc },
      { title: t.legalItem6Title, description: t.legalItem6Desc },
      { title: t.legalItem7Title, description: t.legalItem7Desc },
      { title: t.legalItem8Title, description: t.legalItem8Desc },
      { title: t.legalItem9Title, description: t.legalItem9Desc },
      { title: t.legalItem10Title, description: t.legalItem10Desc },
      { title: t.legalItem11Title, description: t.legalItem11Desc },
      { title: t.legalItem12Title, description: t.legalItem12Desc },
      { title: t.legalItem13Title, description: t.legalItem13Desc },
      { title: t.legalItem14Title, description: t.legalItem14Desc },
      { title: t.legalItem15Title, description: t.legalItem15Desc }
    ], 
    footerPrompt: t.modalFooterPromptLegal
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
    footerPrompt: t.modalFooterPromptRealEstate
  },
  tax: { 
    title: t.modalTaxTitle, 
    description: t.modalTaxDesc, 
    items: [
      { title: t.taxItem1Title, description: t.taxItem1Desc },
      { title: t.taxItem2Title, description: t.taxItem2Desc },
      { title: t.taxItem3Title, description: t.taxItem3Desc },
      { title: t.taxItem4Title, description: t.taxItem4Desc },
      { title: t.taxItem5Title, description: t.taxItem5Desc },
      { title: t.taxItem6Title, description: t.taxItem6Desc }
    ], 
    footerPrompt: t.modalFooterPromptTax 
  }
});

// ----------------------------------------------------------------------
// 2. COMPONENTES DE UI REUTILIZÁVEIS
// ----------------------------------------------------------------------

const ServiceCard = ({ icon: Icon, title, description, onButtonClick }) => (
  <div 
    onClick={onButtonClick}
    className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 flex flex-col items-center hover:border-green-400 hover:scale-105 transition-all duration-300 text-center cursor-pointer"
  >
    <div className="bg-gray-700 p-4 rounded-full mb-6">
      <Icon className="w-8 h-8 text-green-400" />
    </div>
    <h3 className="text-2xl font-semibold mb-4">{title}</h3>
    <p className="text-gray-400 flex-grow">{description}</p>
  </div>
);

const Modal = ({ isOpen, onClose, data, fabLinks, t }) => {
  useEffect(() => {
    const handleEsc = (event) => event.key === 'Escape' && onClose();
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEsc);
    }
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !data) return null;

  const ModalFooter = ({ prompt }) => (
    <div className="text-center mt-8 p-6 bg-gray-800/50 rounded-lg">
      <h3 className="text-2xl font-bold mb-4">{prompt}</h3>
      <p className="text-lg text-gray-300 mb-6">{t.modalFooterContactHint}</p>
      <div className="flex flex-wrap justify-center gap-4">
        {fabLinks.map(({ type, Icon, color, href, label }) => (
          <a 
            key={type} 
            href={href} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`${color} text-white px-6 py-3 rounded-full font-semibold flex items-center space-x-2 transition-all duration-300 hover:scale-105 shadow-lg`}
          >
            <Icon size={20} />
            <span>{label}</span>
          </a>
        ))}
      </div>
    </div>
  );

  const RealEstateContent = () => (
    <>
      <div className="bg-gray-800 p-6 rounded-lg mb-8 text-center border border-gray-700">
        <h3 className="text-2xl font-semibold mb-3">{data.sellPrompt.title}</h3>
        <p className="text-gray-400 mb-4">{data.sellPrompt.description}</p>
        <div className="flex flex-wrap justify-center gap-4">
          {fabLinks.map(({ type, Icon, color, href, label }) => (
            <a 
              key={type} 
              href={href} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`${color} text-white px-4 py-2 rounded-full font-semibold flex items-center space-x-2 transition-all duration-300 hover:scale-105 shadow-lg text-sm`}
            >
              <Icon size={16} />
              <span>{label}</span>
            </a>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-6 text-center">{data.buyPrompt.title}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 text-left">
          {data.buyPrompt.locations.map(city => (
            <div key={city} className="bg-gray-800/50 p-4 rounded-lg flex flex-col justify-between border border-gray-700">
              <h4 className="text-xl font-semibold mb-3 text-white">{t.buyPromptLocationPrefix} {city}</h4>
              <div className="flex flex-wrap gap-2 mt-auto">
                {fabLinks.slice(0, 2).map(({ type, Icon, color, href, label }) => (
                  <a 
                    key={type} 
                    href={href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`${color} text-white px-3 py-1 rounded-full font-semibold flex items-center space-x-1 transition-all duration-300 hover:scale-105 shadow-lg text-xs`}
                  >
                    <Icon size={14} />
                    <span>{label}</span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <ModalFooter prompt={data.footerPrompt} />
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
      <ModalFooter prompt={data.footerPrompt} />
    </>
  );

  return (
    <div 
      onClick={onClose} 
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50"
    >
      <div 
        onClick={(e) => e.stopPropagation()} 
        className="bg-gray-900 rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto p-6 md:p-8 transform scale-100"
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

const ServicesSection = ({ content, data, onCardClick }) => (
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

  const handleOpenModal = (modalId) => {
    console.log('Opening modal:', modalId); // Debug log
    setActiveModalId(modalId);
  };
  
  const handleCloseModal = () => {
    console.log('Closing modal'); // Debug log
    setActiveModalId(null);
  };
  
  const toggleFab = () => setIsFabOpen(prev => !prev);

  useEffect(() => { 
    document.documentElement.style.scrollBehavior = 'smooth'; 
  }, []);

  const t = i18nConfig[language];
  const currentSiteConfig = siteConfig(t);
  const currentServicesData = servicesData(t);
  const currentModalsData = modalsData(t);
  const currentFabLinks = siteConfig(t).fabLinks(t);

  const modalData = activeModalId ? currentModalsData[activeModalId] : null;

  console.log('Current modal data:', modalData); // Debug log
  console.log('Active modal ID:', activeModalId); // Debug log

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
      />
      <Footer content={currentSiteConfig.footer} />
      <FloatingActionButton 
        onToggle={toggleFab} 
        isOpen={isFabOpen} 
        links={currentFabLinks}
        buttonText={t.fabButtonText}
      />
      <Modal 
        isOpen={activeModalId !== null} 
        onClose={handleCloseModal} 
        data={modalData} 
        fabLinks={currentFabLinks}
        t={t}
      />
    </div>
  );
}