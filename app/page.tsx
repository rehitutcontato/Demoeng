'use client';

import React, { useState, useId } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  HardHat,
  Ruler,
  CheckCircle2,
  Shield,
  Calendar,
  ArrowUpRight,
  ChevronDown,
  Video,
  Layers,
  Compass,
  FileCheck,
  Building2,
  Phone,
  Clock,
  Sparkles,
  ShieldCheck,
  ChevronRight,
  Send,
  Eye,
  Activity,
  Award,
  Lock,
  FileText,
  MapPin,
  Check,
  Zap,
  Sliders,
  AlertCircle
} from 'lucide-react';

// Official Contact and WhatsApp trigger URL
const WHATSAPP_BASE_URL =
  'https://wa.me/5519994656845?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20reuni%C3%A3o%20de%20alinhamento%20para%20or%C3%A7amento%20de%20obra%20residencial.';

const CONDOMINIOS_RMC = [
  { id: 'alphaville', name: 'Alphaville Campinas', city: 'Campinas / SP', avgTimeMonths: 14 },
  { id: 'swiss-park', name: 'Swiss Park Campinas', city: 'Campinas / SP', avgTimeMonths: 12 },
  { id: 'haras-larissa', name: 'Haras Larissa', city: 'Monte Mor / SP', avgTimeMonths: 16 },
  { id: 'quinta-baroneza', name: 'Quinta da Baroneza', city: 'Bragança / Itatiba', avgTimeMonths: 18 },
  { id: 'fazenda-boavista', name: 'Fazenda Boa Vista', city: 'Porto Feliz / SP', avgTimeMonths: 18 },
  { id: 'outro-condominio', name: 'Outro Condomínio RMC', city: 'Região Metropolitana', avgTimeMonths: 13 },
];

export default function MasterLandingPage() {
  // Simulator State
  const [selectedArea, setSelectedArea] = useState<number>(650);
  const [selectedCondo, setSelectedCondo] = useState<string>('alphaville');
  const [hasArchitecturalProject, setHasArchitecturalProject] = useState<boolean>(true);
  const [activeStepTab, setActiveStepTab] = useState<number>(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [isLiveCamModalOpen, setIsLiveCamModalOpen] = useState<boolean>(false);
  const [projectSentSuccess, setProjectSentSuccess] = useState<boolean>(false);

  // Dynamic calculations based on area and condominium
  const currentCondoObj = CONDOMINIOS_RMC.find((c) => c.id === selectedCondo) || CONDOMINIOS_RMC[0];
  
  // Mathematical timeline calculation: base time adjusted by area scaling factor
  const executionMonths = Math.max(
    10,
    Math.round((currentCondoObj.avgTimeMonths * (selectedArea / 500) ** 0.35) * 10) / 10
  );
  
  // Technical inspection reports: 2 per month + initial milestone audits
  const technicalReportsCount = Math.round(executionMonths * 2 + 4);
  const bimRevisions = Math.round(selectedArea / 120) + 3;

  // Customized WhatsApp CTA link based on simulator state
  const customWhatsAppUrl = `https://wa.me/5519994656845?text=${encodeURIComponent(
    `Olá, equipe técnica Veros Engenharia. Gostaria de enviar os projetos da minha residência de ${selectedArea}m² no condomínio ${currentCondoObj.name} para análise de viabilidade física e orçamento no regime Turnkey.`
  )}`;

  // Constructive phases data
  const constructivePhases = [
    {
      id: 'etapa-01',
      number: '01',
      title: 'Compatibilização BIM & Terraplanagem',
      shortDesc:
        'Leitura a laser do terreno e eliminação de conflitos entre estrutura e hidráulica antes de comprar o primeiro saco de cimento.',
      badge: 'Fase Pré-Operacional & Fundação',
      tolerances: '± 1.5mm em cota de arrasamento',
      specifications: [
        'Levantamento topográfico 3D por escaneamento a laser LiDAR milimétrico',
        'Compatibilização tridimensional BIM (LOD 400) integrando estrutural, elétrico e climatização',
        'Ensaios geotécnicos e perfuração com trado mecânico / estacas hélice contínua monitoradas',
        'Eliminação de 100% dos retrabalhos e colisões de tubulações em vigas de concreto armado',
      ],
      blueprintFocus: 'Nivelamento Geodésico • Mapa de Cargas Estruturais',
      deliverables: 'Book Digital BIM 3D + Laudo de Sondagem de Solo SPT',
    },
    {
      id: 'etapa-02',
      number: '02',
      title: 'Superestrutura & Alvenaria Armada',
      shortDesc:
        'Concretagem assistida, lajes protendidas e balanços estruturais executados conforme cálculo rígido.',
      badge: 'Fase Estrutural Pesada',
      tolerances: 'FCK 35/40 MPa com ruptura controlada',
      specifications: [
        'Concreto usinado especial com aditivos plastificantes e rastreabilidade por lote de brita e cimento',
        'Ensaios de rompimento de corpos de prova aos 7, 14 e 28 dias com laudo laboratorial homologado',
        'Formas resinadas e escoramentos de precisão para execução de concreto aparente e vãos livres',
        'Armaduras com espaçadores de alta densidade garantindo cobrimento mínimo de projeto e durabilidade de 50+ anos',
      ],
      blueprintFocus: 'Vãos Livres sem Pilares • Lajes Nervuradas Protendidas',
      deliverables: 'Laudo de Resistência de Concretagem + Registro Fotográfico de Ferragens',
    },
    {
      id: 'etapa-03',
      number: '03',
      title: 'Acabamentos Nobres & Entrega de Chaves',
      shortDesc:
        'Instalação de pedras importadas, esquadrias minimalistas embutidas e limpeza fina de entrega.',
      badge: 'Fase de Refinamento & Turnkey',
      tolerances: 'Esquadrias niveladas em zero-gap acústico',
      specifications: [
        'Assentamento a laser de lâminas ultracompactas, mármores importados e porcelanatos de grande formato',
        'Esquadrias de alumínio minimalistas com trilhos 100% embutidos no contrapiso com drenos ocultos',
        'Instalações de automação residencial, climatização dutada e iluminação cênica de alta fidelidade',
        'Checklist final de entrega com mais de 380 itens de conformidade antes da entrega solene das chaves',
      ],
      blueprintFocus: 'Drenagem Oculta • Esquadrias Flush-Floor Minimalistas',
      deliverables: 'Manual do Proprietário com As-Built Digital 3D + Termo de Garantia Estrutural',
    },
  ];

  // FAQ items
  const faqItems = [
    {
      question: 'Como a Veros lida com flutuações de preços de materiais no mercado?',
      answer:
        'Trabalhamos sob contrato de Regime Turnkey com Preço Travado e Matriz de Riscos bem delimitada. No momento em que os projetos executivos são compatibilizados em BIM, travamos os insumos críticos (aço cortado e dobrado, cimento, concreto e esquadrias) através de negociações diretas de grande volume junto à indústria e fornecedores homologados. O proprietário possui previsibilidade financeira absoluta, blindando-se contra a volatilidade inflacionária do setor da construção civil.',
    },
    {
      question: 'Qual é a equipe técnica residente que estará diariamente no meu canteiro?',
      answer:
        'Cada obra residencial da Veros conta com um Engenheiro Civil residente dedicado, acompanhado por um Mestre de Obras sênior com mais de duas décadas de expertise em residências de altíssimo padrão, além de encarregados de controle de qualidade e técnico de segurança do trabalho. Nosso modelo operacional veda o compartilhamento excessivo de profissionais em múltiplas obras simultâneas, assegurando supervisão contínua em cada etapa executiva.',
    },
    {
      question: 'Como é realizada a prestação de contas mensal e as medições físicas?',
      answer:
        'Implementamos o cronograma físico-financeiro com Curva S transparente. As medições são quinzenais e auditadas através de ensaios técnicos e escaneamento digital. Nenhum desembolso financeiro é solicitado antes que a etapa correspondente esteja 100% concluída, fiscalizada e aprovada pela engenharia residente. O cliente tem acesso a um painel com fotos em alta definição, voos de drone e relatórios executivos direto pelo smartphone.',
    },
    {
      question: 'Como é feita a compatibilização com o projeto do meu arquiteto?',
      answer:
        'Mantemos respeito reverencial pela autoria e concepção estética do arquiteto escolhido pela sua família. Atuamos como o braço de viabilização executiva: realizamos a modelagem BIM integrada para prever grandes vãos livres, balanços estruturais arrojados, caixilhos embutidos e calhas ocultas sem interferir no partido arquitetônico. Promovemos reuniões periódicas de alinhamento técnico entre o arquiteto e a nossa engenharia estrutural.',
    },
    {
      question: 'Qual é a extensão da garantia estrutural e o suporte pós-obra?',
      answer:
        'Além da garantia legal de 5 anos preconizada pelas normas ABNT NBR 6118 e NBR 15575, fornecemos o Programa Veros Care de Manutenção Preventiva no primeiro ano de habitação. O cliente recebe o As-Built digital completo (mapa tridimensional de todas as tubulações e condutos elétricos embutidos) e suporte assistido por engenheiro para revisões de vedação, impermeabilização e regulagem de sistemas finos.',
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#08080a] text-slate-200 selection:bg-amber-500 selection:text-black overflow-x-hidden">
      {/* Decorative Technical Millimeter Grid Background */}
      <div 
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #94a3b8 1px, transparent 1px),
            linear-gradient(to bottom, #94a3b8 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Decorative Precision Crosshairs in background */}
      <div className="pointer-events-none fixed top-24 left-8 text-xs font-mono text-slate-700 select-none z-0 hidden lg:block">
        22°53&apos;18&quot;S 47°02&apos;42&quot;W • RMC ELEV: 685m
      </div>
      <div className="pointer-events-none fixed top-24 right-8 text-xs font-mono text-slate-700 select-none z-0 hidden lg:block">
        TOLERÂNCIA: ±0.0015m • CAD/BIM LOD-400
      </div>

      {/* ========================================================================= */}
      {/* 1. TOP BAR: STATUS DA CONSTRUTORA & CABEÇALHO EXECUTIVO                   */}
      {/* ========================================================================= */}
      <header className="sticky top-0 z-50 w-full border-b border-white/[0.08] bg-[#08080a]/90 backdrop-blur-md">
        {/* Top Micro-Bar with Live Construction Status */}
        <div className="border-b border-white/[0.05] bg-[#0c0d10] px-4 py-1.5 text-xs">
          <div className="mx-auto flex max-w-7xl items-center justify-between">
            <div className="flex items-center gap-2 text-slate-400 font-mono tracking-wider">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-slate-300 font-semibold uppercase">CREA-SP REGISTRADO</span>
              <span className="text-slate-600 hidden sm:inline">|</span>
              <span className="text-slate-400 hidden sm:inline">CAMPINAS & REGIÃO METROPOLITANA</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsLiveCamModalOpen(true)}
                className="flex items-center gap-1.5 text-slate-300 hover:text-amber-400 transition-colors font-mono cursor-pointer"
                title="Clique para testar o sistema de transmissão de canteiro"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="hidden md:inline font-medium">Monitoramento por Câmeras em Tempo Real para Clientes</span>
                <span className="md:hidden font-medium">Câmeras ao Vivo</span>
                <Eye className="w-3.5 h-3.5 text-slate-400" />
              </button>
            </div>
          </div>
        </div>

        {/* Main Executive Navigation */}
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Brand Lockup */}
          <div className="flex items-center gap-3">
            <div className="relative flex h-11 w-11 items-center justify-center border border-amber-500/40 bg-gradient-to-br from-neutral-800 to-neutral-950 shadow-inner">
              <div className="absolute inset-0 bg-amber-500/10" />
              <Compass className="h-6 w-6 text-amber-400" />
              {/* Millimeter corner ticks */}
              <div className="absolute -top-[1px] -left-[1px] w-1.5 h-1.5 border-t border-l border-amber-400" />
              <div className="absolute -top-[1px] -right-[1px] w-1.5 h-1.5 border-t border-r border-amber-400" />
              <div className="absolute -bottom-[1px] -left-[1px] w-1.5 h-1.5 border-b border-l border-amber-400" />
              <div className="absolute -bottom-[1px] -right-[1px] w-1.5 h-1.5 border-b border-r border-amber-400" />
            </div>

            <div className="flex flex-col">
              <span className="font-cormorant text-2xl font-bold tracking-tight text-white leading-none">
                VEROS ENGENHARIA
              </span>
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-amber-400/90 font-medium mt-1">
                Construções de Alto Padrão • Turnkey
              </span>
            </div>
          </div>

          {/* Nav Links for Smooth Exploration */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#garantias" className="hover:text-amber-400 transition-colors">
              Garantias de Canteiro
            </a>
            <a href="#etapas" className="hover:text-amber-400 transition-colors">
              Sistema Turnkey
            </a>
            <a href="#simulador" className="hover:text-amber-400 transition-colors">
              Simulador de Obra
            </a>
            <a href="#metodologia" className="hover:text-amber-400 transition-colors">
              Engenharia & BIM
            </a>
            <a href="#faq" className="hover:text-amber-400 transition-colors">
              Dúvidas Técnicas
            </a>
          </nav>

          {/* Action Button to WhatsApp */}
          <div className="flex items-center gap-3">
            <a
              href={WHATSAPP_BASE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 overflow-hidden border border-amber-500/50 bg-gradient-to-r from-amber-600 to-amber-700 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-black transition-all hover:border-amber-400 hover:from-amber-500 hover:to-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-black shadow-[0_0_20px_rgba(217,119,6,0.25)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                <span>Orçamento de Obra</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>
          </div>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* 2. HERO SECTION MONUMENTAL DE ENGENHARIA RESIDENCIAL                      */}
      {/* ========================================================================= */}
      <section className="relative pt-12 pb-24 md:pt-20 md:pb-32 overflow-hidden border-b border-white/[0.08]">
        {/* Subtle Ambient Radial Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-amber-500/5 blur-[140px] pointer-events-none rounded-full" />
        <div className="absolute top-1/2 right-10 w-[400px] h-[300px] bg-slate-500/5 blur-[120px] pointer-events-none rounded-full" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Top Metallic Frame Badge */}
          <div className="inline-flex items-center gap-3 border border-white/[0.12] bg-[#121316]/90 px-3.5 py-1.5 text-[11px] font-mono tracking-widest text-slate-300 shadow-sm backdrop-blur-md mb-8">
            <div className="h-2 w-2 bg-amber-500 rotate-45" />
            <span className="uppercase text-amber-300 font-semibold">
              Construção Civil de Alta Precisão
            </span>
            <span className="text-slate-600">•</span>
            <span className="uppercase text-slate-300 font-medium">Regime Turnkey</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            {/* Left Column: Headlines & High-Conversion Copy */}
            <div className="lg:col-span-8 flex flex-col">
              <h1 className="font-cormorant text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.08] text-balance">
                A materialização física da sua residência de luxo com{' '}
                <span className="relative inline-block text-amber-400">
                  rigor orçamentário
                  <svg
                    className="absolute -bottom-1.5 left-0 w-full text-amber-500/60"
                    height="6"
                    viewBox="0 0 100 6"
                    preserveAspectRatio="none"
                  >
                    <path d="M0 5 Q 50 0 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                  </svg>
                </span>{' '}
                e prazo milimétrico.
              </h1>

              <p className="mt-8 text-lg sm:text-xl text-slate-300 font-light leading-relaxed max-w-3xl">
                Executamos mansões e projetos arquitetônicos complexos em condomínios fechados{' '}
                <span className="text-white font-medium">
                  (Alphaville, Swiss Park, Haras Larissa, Quinta da Baroneza)
                </span>
                , entregando a obra chave na mão com acompanhamento digital diário e zero surpresas financeiras.
              </p>

              {/* Action Buttons & Secondary Link */}
              <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href={WHATSAPP_BASE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 border border-amber-400/80 bg-gradient-to-r from-amber-500 via-amber-600 to-amber-600 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-black shadow-[0_0_30px_rgba(217,119,6,0.3)] transition-all hover:scale-[1.01] hover:brightness-110 focus:outline-none"
                >
                  <Send className="h-4 w-4" />
                  <span>Solicitar Análise de Projeto & Estimativa de Obra</span>
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>

                <a
                  href="#simulador"
                  className="inline-flex items-center justify-center gap-2 border border-white/20 bg-white/[0.04] px-6 py-4 text-sm font-medium text-slate-200 backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/[0.08]"
                >
                  <Ruler className="h-4 w-4 text-amber-400" />
                  <span>Simular Cronograma de Execução</span>
                </a>
              </div>

              {/* RMC Regional Trust Coordinates */}
              <div className="mt-12 pt-8 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-4 gap-6">
                <div>
                  <div className="font-mono text-2xl sm:text-3xl font-semibold text-white tabular-nums">
                    100%
                  </div>
                  <div className="text-xs text-slate-400 mt-1 uppercase font-mono tracking-wider">
                    Contrato com Preço Travado
                  </div>
                </div>
                <div>
                  <div className="font-mono text-2xl sm:text-3xl font-semibold text-amber-400 tabular-nums">
                    LOD 400
                  </div>
                  <div className="text-xs text-slate-400 mt-1 uppercase font-mono tracking-wider">
                    Modelagem BIM Executiva
                  </div>
                </div>
                <div>
                  <div className="font-mono text-2xl sm:text-3xl font-semibold text-white tabular-nums">
                    24/7
                  </div>
                  <div className="text-xs text-slate-400 mt-1 uppercase font-mono tracking-wider">
                    Transmissão HD do Canteiro
                  </div>
                </div>
                <div>
                  <div className="font-mono text-2xl sm:text-3xl font-semibold text-white tabular-nums">
                    0 Defeitos
                  </div>
                  <div className="text-xs text-slate-400 mt-1 uppercase font-mono tracking-wider">
                    Tolerância Milimétrica
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Architectural Blueprint & Live Site Telemetry Card */}
            <div className="lg:col-span-4 flex flex-col">
              <div className="relative border border-white/[0.12] bg-[#121316] p-6 shadow-2xl">
                {/* Decorative Millimeter Ruler at top */}
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-500/40 via-slate-600/30 to-amber-500/40 flex items-center justify-between px-2 overflow-hidden">
                  {[...Array(20)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-[1px] bg-slate-400 ${i % 5 === 0 ? 'h-2' : 'h-1'}`}
                    />
                  ))}
                </div>

                <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 pt-1">
                  <div className="flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-amber-400" />
                    <span className="text-xs font-mono font-semibold uppercase text-slate-200">
                      Padrão Construtivo Veros
                    </span>
                  </div>
                  <span className="rounded-none border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-mono text-emerald-400 font-medium">
                    OBRA EM ANDAMENTO
                  </span>
                </div>

                {/* Styled Blueprint Schematics Graphic */}
                <div className="my-5 relative h-56 w-full border border-white/[0.08] bg-[#090a0d] overflow-hidden flex flex-col justify-between p-4">
                  {/* Blueprint Grid Lines */}
                  <div
                    className="absolute inset-0 opacity-20 pointer-events-none"
                    style={{
                      backgroundImage: `radial-gradient(circle, #38bdf8 1px, transparent 1px)`,
                      backgroundSize: '16px 16px',
                    }}
                  />

                  {/* Wireframe Villa Blueprint Representation */}
                  <svg
                    viewBox="0 0 320 180"
                    className="w-full h-full stroke-slate-500 fill-none stroke-[1.2]"
                  >
                    {/* Foundation & Columns */}
                    <rect x="20" y="110" width="280" height="40" className="stroke-amber-500/40" />
                    <line x1="40" y1="50" x2="40" y2="150" className="stroke-slate-400" />
                    <line x1="120" y1="30" x2="120" y2="150" className="stroke-slate-400" />
                    <line x1="200" y1="30" x2="200" y2="150" className="stroke-slate-400" />
                    <line x1="280" y1="50" x2="280" y2="150" className="stroke-slate-400" />

                    {/* Cantilever Slab (Balanço Estrutural) */}
                    <path
                      d="M20 50 L200 50 L240 30 L300 30 L300 70 L20 70 Z"
                      className="stroke-amber-400 fill-amber-500/10 stroke-1"
                    />

                    {/* Dimension Lines with laser indicators */}
                    <line x1="20" y1="165" x2="300" y2="165" className="stroke-amber-400/80 stroke-dasharray-2" />
                    <text x="140" y="162" className="fill-amber-300 text-[8px] font-mono">
                      L = 28.40m
                    </text>
                    <circle cx="200" cy="50" r="3" className="fill-amber-400 stroke-none" />
                    <circle cx="280" cy="50" r="3" className="fill-amber-400 stroke-none" />
                  </svg>

                  {/* Telemetry overlay inside the card */}
                  <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-slate-400 bg-black/60 backdrop-blur-sm p-2 border border-white/[0.05]">
                    <div className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                      <span>CANTEIRO #04 - ALPHAVILLE</span>
                    </div>
                    <span className="text-amber-400">FASE: LAJE 02</span>
                  </div>
                </div>

                {/* Technical verification points */}
                <div className="space-y-2.5 text-xs text-slate-300 font-mono">
                  <div className="flex items-center justify-between py-1 border-b border-white/[0.04]">
                    <span className="text-slate-400">Concreto FCK 40 MPa:</span>
                    <span className="text-emerald-400 font-semibold">100% Aprovado (Laudo IPT)</span>
                  </div>
                  <div className="flex items-center justify-between py-1 border-b border-white/[0.04]">
                    <span className="text-slate-400">Desvio Estrutural Tolerado:</span>
                    <span className="text-slate-200 font-semibold">&lt; 1.2 mm / prumo laser</span>
                  </div>
                  <div className="flex items-center justify-between py-1 border-b border-white/[0.04]">
                    <span className="text-slate-400">Responsável Técnico:</span>
                    <span className="text-amber-300 font-medium">Eng. Rafael D&apos;Ávila • CREA-SP</span>
                  </div>
                </div>

                {/* CCTV Live Cam Trigger CTA */}
                <button
                  onClick={() => setIsLiveCamModalOpen(true)}
                  className="mt-6 w-full flex items-center justify-center gap-2 border border-white/20 bg-white/[0.05] hover:bg-white/[0.1] text-xs font-mono uppercase tracking-wider text-slate-200 py-3 transition-colors"
                >
                  <Video className="w-3.5 h-3.5 text-amber-400" />
                  <span>Ver Demonstração de Câmera 4K</span>
                </button>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* TRÍADE DE GARANTIAS DE CANTEIRO                                           */}
          {/* ========================================================================= */}
          <div id="garantias" className="mt-20 scroll-mt-24">
            <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold">
                  Compromisso Executivo Inegociável
                </span>
                <h2 className="font-cormorant text-2xl sm:text-3xl text-white font-semibold mt-1">
                  A Tríade de Garantias de Canteiro Veros
                </h2>
              </div>
              <p className="text-xs text-slate-400 font-mono">
                CLÁUSULAS CONTRATUAIS REGISTRADAS EM CARTÓRIO • PRESERVAÇÃO INTEGRAL DE PATRIMÔNIO
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1: Contrato Fechado */}
              <div className="group relative border border-white/[0.1] bg-[#121316] p-8 transition-all hover:border-amber-500/50 hover:bg-[#15171c]">
                <div className="absolute top-0 left-0 h-1 w-12 bg-amber-500 transition-all group-hover:w-full" />
                <div className="flex h-12 w-12 items-center justify-center border border-amber-500/30 bg-amber-500/10 mb-6">
                  <Lock className="h-6 w-6 text-amber-400" />
                </div>
                <div className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-2 font-medium">
                  Garantia 01
                </div>
                <h3 className="font-cormorant text-2xl font-semibold text-white">
                  Contrato Fechado
                </h3>
                <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                  Orçamento detalhado com trava de custos e cronograma físico-financeiro transparente.
                  Sem adicionais ocultos, sem surpresas no meio da concretagem e com matriz de risco fixada.
                </p>
                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center gap-2 text-xs font-mono text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>Trava total de insumos e mão de obra</span>
                </div>
              </div>

              {/* Card 2: Diário de Obra Digital */}
              <div className="group relative border border-white/[0.1] bg-[#121316] p-8 transition-all hover:border-amber-500/50 hover:bg-[#15171c]">
                <div className="absolute top-0 left-0 h-1 w-12 bg-amber-500 transition-all group-hover:w-full" />
                <div className="flex h-12 w-12 items-center justify-center border border-amber-500/30 bg-amber-500/10 mb-6">
                  <Video className="h-6 w-6 text-amber-400" />
                </div>
                <div className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-2 font-medium">
                  Garantia 02
                </div>
                <h3 className="font-cormorant text-2xl font-semibold text-white">
                  Diário de Obra Digital
                </h3>
                <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                  Câmeras ao vivo no canteiro e relatórios semanais direto no celular do proprietário.
                  Acesso 24 horas por aplicativo dedicado para você acompanhar a evolução de cada laje onde estiver.
                </p>
                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center gap-2 text-xs font-mono text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>Transmissão em Full HD e fotos com drone</span>
                </div>
              </div>

              {/* Card 3: Garantia Estrutural Estendida */}
              <div className="group relative border border-white/[0.1] bg-[#121316] p-8 transition-all hover:border-amber-500/50 hover:bg-[#15171c]">
                <div className="absolute top-0 left-0 h-1 w-12 bg-amber-500 transition-all group-hover:w-full" />
                <div className="flex h-12 w-12 items-center justify-center border border-amber-500/30 bg-amber-500/10 mb-6">
                  <ShieldCheck className="h-6 w-6 text-amber-400" />
                </div>
                <div className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-2 font-medium">
                  Garantia 03
                </div>
                <h3 className="font-cormorant text-2xl font-semibold text-white">
                  Garantia Estrutural Estendida
                </h3>
                <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                  Rastreabilidade total de insumos (concreto com laudo, aços e impermeabilizações de ponta).
                  Manual do proprietário com modelo As-Built em 3D para intervenções futuras sem riscos.
                </p>
                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center gap-2 text-xs font-mono text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>Conformidade ABNT NBR 6118 e NBR 15575</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. O SISTEMA CONSTRUTIVO TURNKEY (LINHA DO TEMPO INTERATIVA DE ETAPAS)    */}
      {/* ========================================================================= */}
      <section id="etapas" className="relative py-24 border-b border-white/[0.08] bg-[#0c0d10] scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold">
              Metodologia de Engenharia de Precisão
            </span>
            <h2 className="font-cormorant text-3xl sm:text-5xl font-semibold text-white tracking-tight mt-2">
              O Sistema Construtivo Turnkey Veros
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300 font-light">
              Transformamos projetos arquitetônicos de alta plasticidade em marcos concretos através
              de três etapas com tolerância milimétrica e validação técnica em laboratório.
            </p>
          </div>

          {/* Interactive Phase Selector Tabs */}
          <div className="mt-12 flex flex-col md:flex-row border-b border-white/[0.1]">
            {constructivePhases.map((phase, idx) => (
              <button
                key={phase.id}
                onClick={() => setActiveStepTab(idx)}
                className={`relative flex-1 py-5 px-6 text-left transition-all cursor-pointer flex items-center gap-4 ${
                  activeStepTab === idx
                    ? 'bg-[#15171c] text-white border-l-2 md:border-l-0 md:border-t-2 border-amber-400'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.02]'
                }`}
              >
                <span className="font-mono text-xl font-bold text-amber-400/90">{phase.number}</span>
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Etapa {phase.number}
                  </div>
                  <div className="font-cormorant text-lg font-semibold text-white line-clamp-1">
                    {phase.title.split('&')[0]}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Active Phase Content Visualizer */}
          <div className="mt-8 border border-white/[0.1] bg-[#121316] p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Detailed Breakdown */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-mono text-amber-400 mb-4">
                  <span>{constructivePhases[activeStepTab].badge}</span>
                  <span>•</span>
                  <span>{constructivePhases[activeStepTab].tolerances}</span>
                </div>

                <h3 className="font-cormorant text-3xl sm:text-4xl font-semibold text-white">
                  {constructivePhases[activeStepTab].title}
                </h3>

                <p className="mt-4 text-base sm:text-lg text-slate-300 font-light leading-relaxed">
                  {constructivePhases[activeStepTab].shortDesc}
                </p>

                {/* Rigid Technical Specifications List */}
                <div className="mt-8 space-y-3.5">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Protocolos Executivos Homologados:
                  </div>
                  {constructivePhases[activeStepTab].specifications.map((spec, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-3">
                      <div className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-none border border-amber-500/40 bg-amber-500/10">
                        <Check className="h-3 w-3 text-amber-400" />
                      </div>
                      <span className="text-sm text-slate-200 leading-normal">{spec}</span>
                    </div>
                  ))}
                </div>

                {/* Deliverables Banner */}
                <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono text-slate-400">
                  <div>
                    <span className="text-slate-500 uppercase">Entregável da Etapa: </span>
                    <span className="text-amber-300 font-medium">
                      {constructivePhases[activeStepTab].deliverables}
                    </span>
                  </div>
                  <a
                    href={WHATSAPP_BASE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-semibold"
                  >
                    <span>Consultar detalhes de contrato</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Graphic Architectural Card for the Phase */}
              <div className="lg:col-span-5">
                <div className="relative border border-white/[0.1] bg-[#08080a] p-6">
                  {/* Phase Blueprint Visualizer */}
                  <div className="flex items-center justify-between border-b border-white/[0.08] pb-3 mb-4">
                    <span className="text-xs font-mono text-slate-400">
                      ESPECIFICAÇÃO DE ENGENHARIA #0{activeStepTab + 1}
                    </span>
                    <span className="text-xs font-mono text-amber-400">
                      {constructivePhases[activeStepTab].blueprintFocus}
                    </span>
                  </div>

                  {/* Dynamic Technical Wireframe Schematics */}
                  <div className="relative h-64 w-full border border-white/[0.06] bg-[#0c0d10] p-4 flex flex-col justify-between">
                    {/* Measurement Rulers */}
                    <div className="flex justify-between text-[9px] font-mono text-slate-600 border-b border-slate-800 pb-1">
                      <span>0.000m</span>
                      <span>+1.500m</span>
                      <span>+3.200m</span>
                      <span>+6.400m</span>
                    </div>

                    {activeStepTab === 0 && (
                      <div className="my-auto space-y-3">
                        <div className="flex items-center justify-between text-xs font-mono text-slate-300">
                          <span className="flex items-center gap-2">
                            <Layers className="w-4 h-4 text-amber-400" />
                            Modelagem 3D BIM Navisworks
                          </span>
                          <span className="text-emerald-400">0 Interferências</span>
                        </div>
                        <div className="w-full bg-slate-800 h-2">
                          <div className="bg-amber-500 h-2 w-[100%]" />
                        </div>
                        <div className="flex items-center justify-between text-xs font-mono text-slate-300">
                          <span className="flex items-center gap-2">
                            <Compass className="w-4 h-4 text-amber-400" />
                            Nivelamento a Laser LiDAR
                          </span>
                          <span className="text-amber-300">Precisão 1.5mm</span>
                        </div>
                        <div className="w-full bg-slate-800 h-2">
                          <div className="bg-amber-400 h-2 w-[100%]" />
                        </div>
                      </div>
                    )}

                    {activeStepTab === 1 && (
                      <div className="my-auto space-y-3">
                        <div className="flex items-center justify-between text-xs font-mono text-slate-300">
                          <span className="flex items-center gap-2">
                            <Activity className="w-4 h-4 text-amber-400" />
                            Resistência Cimento/FCK
                          </span>
                          <span className="text-amber-400">40.5 MPa (Alvo: 35)</span>
                        </div>
                        <div className="w-full bg-slate-800 h-2">
                          <div className="bg-amber-500 h-2 w-[100%]" />
                        </div>
                        <div className="flex items-center justify-between text-xs font-mono text-slate-300">
                          <span className="flex items-center gap-2">
                            <Shield className="w-4 h-4 text-amber-400" />
                            Armadura Protendida Aço CA-50
                          </span>
                          <span className="text-emerald-400">100% Certificado Gerdau</span>
                        </div>
                        <div className="w-full bg-slate-800 h-2">
                          <div className="bg-emerald-400 h-2 w-[100%]" />
                        </div>
                      </div>
                    )}

                    {activeStepTab === 2 && (
                      <div className="my-auto space-y-3">
                        <div className="flex items-center justify-between text-xs font-mono text-slate-300">
                          <span className="flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-amber-400" />
                            Esquadrias Minimalistas Embutidas
                          </span>
                          <span className="text-amber-400">Trilho Oculto Drenado</span>
                        </div>
                        <div className="w-full bg-slate-800 h-2">
                          <div className="bg-amber-500 h-2 w-[100%]" />
                        </div>
                        <div className="flex items-center justify-between text-xs font-mono text-slate-300">
                          <span className="flex items-center gap-2">
                            <FileCheck className="w-4 h-4 text-amber-400" />
                            Checklist de Entrega Vistoriado
                          </span>
                          <span className="text-emerald-400">384 Itens Verificados</span>
                        </div>
                        <div className="w-full bg-slate-800 h-2">
                          <div className="bg-emerald-400 h-2 w-[100%]" />
                        </div>
                      </div>
                    )}

                    <div className="border-t border-slate-800 pt-2 flex items-center justify-between text-[10px] font-mono text-slate-500">
                      <span>AUDITORIA: ISO 9001 / PBQP-H NÍVEL A</span>
                      <span className="text-amber-400/80">VEROS ENGENHARIA</span>
                    </div>
                  </div>

                  <p className="mt-4 text-xs text-slate-400 font-mono text-center">
                    Auditoria física permanente por Engenheiro Civil sênior registrado.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. SIMULADOR INTERATIVO DE CRONOGRAMA DE OBRA                             */}
      {/* ========================================================================= */}
      <section id="simulador" className="relative py-24 border-b border-white/[0.08] scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-mono text-amber-400 mb-4">
              <Sliders className="w-3.5 h-3.5" />
              <span>SIMULADOR FÍSICO-FINANCEIRO EXECUTIVO</span>
            </div>
            <h2 className="font-cormorant text-3xl sm:text-5xl font-semibold text-white tracking-tight">
              Calcule a Estimativa Real da Sua Construção
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300 font-light">
              Insira a metragem quadrada planejada e o condomínio fechado para visualizar
              o prazo médio de entrega, o volume de medições técnicas e solicitar a análise de projeto.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Controls Side */}
            <div className="lg:col-span-6 border border-white/[0.1] bg-[#121316] p-8 shadow-xl">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-6">
                <span className="text-sm font-mono uppercase tracking-wider text-slate-300 font-semibold flex items-center gap-2">
                  <Ruler className="w-4 h-4 text-amber-400" />
                  1. Metragem Quadrada Construída (m²)
                </span>
                <span className="font-mono text-2xl font-bold text-amber-400 tabular-nums">
                  {selectedArea} m²
                </span>
              </div>

              {/* Range Slider with millimetric steps */}
              <div className="space-y-4">
                <input
                  type="range"
                  min="300"
                  max="1500"
                  step="25"
                  value={selectedArea}
                  onChange={(e) => setSelectedArea(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-none appearance-none cursor-pointer accent-amber-500"
                />
                
                {/* Quick Presets */}
                <div className="flex items-center justify-between gap-2 pt-2">
                  {[450, 650, 900, 1200].map((preset) => (
                    <button
                      key={preset}
                      onClick={() => setSelectedArea(preset)}
                      className={`flex-1 py-1.5 px-2 text-xs font-mono border transition-all ${
                        selectedArea === preset
                          ? 'border-amber-400 bg-amber-500/20 text-amber-300 font-bold'
                          : 'border-white/10 bg-white/[0.02] text-slate-400 hover:text-white hover:border-white/20'
                      }`}
                    >
                      {preset} m²
                    </button>
                  ))}
                </div>
              </div>

              {/* Condominium Selector */}
              <div className="mt-8 pt-6 border-t border-white/[0.08]">
                <label className="block text-sm font-mono uppercase tracking-wider text-slate-300 font-semibold mb-3 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-amber-400" />
                  2. Condomínio Fechado na RMC
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {CONDOMINIOS_RMC.map((condo) => (
                    <button
                      key={condo.id}
                      onClick={() => setSelectedCondo(condo.id)}
                      className={`text-left p-3 border transition-all ${
                        selectedCondo === condo.id
                          ? 'border-amber-400 bg-amber-500/10 text-white'
                          : 'border-white/[0.08] bg-[#0e0f13] text-slate-400 hover:text-slate-200 hover:border-white/20'
                      }`}
                    >
                      <div className="font-semibold text-xs text-white">{condo.name}</div>
                      <div className="text-[10px] font-mono text-slate-400 mt-0.5">{condo.city}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Project Status Toggle */}
              <div className="mt-8 pt-6 border-t border-white/[0.08] flex items-center justify-between">
                <div>
                  <div className="text-xs font-mono uppercase text-slate-300 font-semibold">
                    Você já possui o projeto arquitetônico?
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    Se já possuir as plantas em DWG/PDF, podemos iniciar a orçamentação técnica.
                  </div>
                </div>
                <button
                  onClick={() => setHasArchitecturalProject(!hasArchitecturalProject)}
                  className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                    hasArchitecturalProject ? 'bg-amber-500' : 'bg-slate-700'
                  }`}
                >
                  <span
                    className={`inline-block h-5 w-5 transform bg-black transition duration-200 ease-in-out ${
                      hasArchitecturalProject ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Results & Engineering Output Side */}
            <div className="lg:col-span-6 border border-amber-500/30 bg-gradient-to-b from-[#14151a] to-[#0c0d10] p-8 shadow-2xl relative">
              {/* Millimeter border accents */}
              <div className="absolute top-0 right-0 p-3 text-[10px] font-mono text-amber-400/80">
                SIMULAÇÃO VEROS • REGIME TURNKEY
              </div>

              <div className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                Diagnóstico Preliminar de Execução
              </div>
              <h3 className="font-cormorant text-2xl sm:text-3xl text-white font-semibold mt-1">
                Residência de {selectedArea}m² em {currentCondoObj.name}
              </h3>

              {/* Dynamic KPI Metric Blocks */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="border border-white/[0.08] bg-[#090a0d] p-5">
                  <div className="flex items-center gap-2 text-slate-400 text-xs font-mono">
                    <Calendar className="w-4 h-4 text-amber-400" />
                    Prazo Médio Estimado
                  </div>
                  <div className="mt-2 font-mono text-3xl font-bold text-white tabular-nums">
                    {executionMonths}{' '}
                    <span className="text-sm font-normal text-slate-400">meses</span>
                  </div>
                  <div className="text-[10px] text-slate-500 font-mono mt-1">
                    Da terraplanagem à entrega das chaves
                  </div>
                </div>

                <div className="border border-white/[0.08] bg-[#090a0d] p-5">
                  <div className="flex items-center gap-2 text-slate-400 text-xs font-mono">
                    <FileText className="w-4 h-4 text-amber-400" />
                    Medições & Relatórios
                  </div>
                  <div className="mt-2 font-mono text-3xl font-bold text-amber-400 tabular-nums">
                    {technicalReportsCount}{' '}
                    <span className="text-sm font-normal text-slate-400">auditorias</span>
                  </div>
                  <div className="text-[10px] text-slate-500 font-mono mt-1">
                    Relatórios quinzenais com drone e ensaios
                  </div>
                </div>
              </div>

              {/* Gantt Overview Breakdown */}
              <div className="mt-6 border border-white/[0.08] bg-[#090a0d] p-5 space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-2">
                  Cronograma Físico-Financeiro Resumido:
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono text-slate-400 mb-1">
                    <span>Mês 01 - 03: Sondagem, BIM & Fundações Hélice</span>
                    <span className="text-amber-400">20% Concluído</span>
                  </div>
                  <div className="w-full bg-slate-800 h-1.5">
                    <div className="bg-amber-500 h-1.5 w-[20%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono text-slate-400 mb-1">
                    <span>Mês 04 - 08: Superestrutura, Lajes Protendidas & Alvenaria</span>
                    <span className="text-amber-400">55% Concluído</span>
                  </div>
                  <div className="w-full bg-slate-800 h-1.5">
                    <div className="bg-amber-500 h-1.5 w-[55%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono text-slate-400 mb-1">
                    <span>Mês 09 - {Math.round(executionMonths)}: Instalações, Esquadrias & Acabamentos Finos</span>
                    <span className="text-amber-400">100% Chave na Mão</span>
                  </div>
                  <div className="w-full bg-slate-800 h-1.5">
                    <div className="bg-amber-400 h-1.5 w-[100%]" />
                  </div>
                </div>
              </div>

              {/* Direct Action Link with Prefilled Custom WhatsApp Message */}
              <div className="mt-8 space-y-3">
                <a
                  href={customWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 border border-amber-400 bg-amber-500 hover:bg-amber-400 text-black py-4 px-6 text-sm font-semibold uppercase tracking-wider transition-all shadow-[0_0_25px_rgba(217,119,6,0.3)]"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar Projeto Arquitetônico via WhatsApp</span>
                </a>

                <p className="text-[11px] font-mono text-slate-400 text-center">
                  Atendimento confidencial direto com a diretoria técnica da Veros Engenharia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. METODOLOGIA DE ENGENHARIA COMPARADA (OBRA COMUM VS REGIME VEROS)       */}
      {/* ========================================================================= */}
      <section id="metodologia" className="relative py-24 border-b border-white/[0.08] bg-[#0c0d10] scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold">
              Rigor Técnico vs. Amadorismo de Canteiro
            </span>
            <h2 className="font-cormorant text-3xl sm:text-5xl font-semibold text-white tracking-tight mt-2">
              Por que a Engenharia Turnkey da Veros Elimina Dores de Cabeça
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300 font-light">
              Construir uma residência de luxo não pode se transformar em um pesadelo de aditivos orçamentários,
              atrasos crônicos e disputa de culpa entre fornecedores.
            </p>
          </div>

          {/* Comparative Technical Matrix */}
          <div className="mt-12 overflow-x-auto border border-white/[0.1] bg-[#121316]">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b border-white/[0.1] bg-[#090a0d] text-xs font-mono uppercase tracking-wider">
                  <th className="p-5 text-slate-400 font-medium">Critério Técnico de Canteiro</th>
                  <th className="p-5 text-slate-500 font-medium">Modelo Tradicional (Empreiteiros)</th>
                  <th className="p-5 text-amber-400 font-semibold bg-amber-500/5 border-l border-amber-500/20">
                    Regime Turnkey de Precisão Veros
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.05] text-sm font-light text-slate-300">
                <tr>
                  <td className="p-5 font-medium text-white font-mono text-xs">
                    Trava Orçamentária
                  </td>
                  <td className="p-5 text-slate-400">
                    Orçamentos por estimativa flexível com estouros frequentes de 30% a 50%.
                  </td>
                  <td className="p-5 text-white bg-amber-500/5 border-l border-amber-500/20 font-normal">
                    <strong className="text-amber-300 font-semibold">Contrato com Preço Travado</strong> baseado em modelagem BIM tridimensional e trava antecipada de insumos.
                  </td>
                </tr>

                <tr>
                  <td className="p-5 font-medium text-white font-mono text-xs">
                    Supervisão no Canteiro
                  </td>
                  <td className="p-5 text-slate-400">
                    Visitas esporádicas do engenheiro (1 a 2 vezes por semana). Operários sem liderança técnica contínua.
                  </td>
                  <td className="p-5 text-white bg-amber-500/5 border-l border-amber-500/20 font-normal">
                    <strong className="text-amber-300 font-semibold">Engenheiro Civil Residente em tempo integral</strong> com Mestre de Obras dedicado à sua casa.
                  </td>
                </tr>

                <tr>
                  <td className="p-5 font-medium text-white font-mono text-xs">
                    Transparência do Proprietário
                  </td>
                  <td className="p-5 text-slate-400">
                    O cliente precisa ir ao canteiro no sábado cobrar prazos e resolver conflitos de fornecedores.
                  </td>
                  <td className="p-5 text-white bg-amber-500/5 border-l border-amber-500/20 font-normal">
                    <strong className="text-amber-300 font-semibold">Câmeras 24h em alta definição</strong> e relatórios quinzenais com ensaios de rompimento de concreto no celular.
                  </td>
                </tr>

                <tr>
                  <td className="p-5 font-medium text-white font-mono text-xs">
                    Compatibilização de Projetos
                  </td>
                  <td className="p-5 text-slate-400">
                    Conflitos entre hidráulica e vigas descobertos na hora da marreta, gerando quebra-quebra e atrasos.
                  </td>
                  <td className="p-5 text-white bg-amber-500/5 border-l border-amber-500/20 font-normal">
                    <strong className="text-amber-300 font-semibold">BIM LOD 400 completo</strong> antes da primeira concretagem. 100% dos tubos já passam nos locais calculados.
                  </td>
                </tr>

                <tr>
                  <td className="p-5 font-medium text-white font-mono text-xs">
                    Pós-Obra & Manutenção
                  </td>
                  <td className="p-5 text-slate-400">
                    Empreiteiros desaparecem após a entrega final. Nenhum documento de tubulações embutidas é entregue.
                  </td>
                  <td className="p-5 text-white bg-amber-500/5 border-l border-amber-500/20 font-normal">
                    <strong className="text-amber-300 font-semibold">As-Built 3D completo + Programa Veros Care</strong> com garantia estendida e manual do proprietário digital.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. FAQ ESTRATÉGICO PARA FUTUROS MORADORES (ACORDEÃO DE OBRA)              */}
      {/* ========================================================================= */}
      <section id="faq" className="relative py-24 border-b border-white/[0.08] scroll-mt-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold">
              Esclarecimentos & Protocolos
            </span>
            <h2 className="font-cormorant text-3xl sm:text-5xl font-semibold text-white tracking-tight mt-2">
              Dúvidas Técnicas Frequentes
            </h2>
            <p className="mt-4 text-base text-slate-300 font-light">
              Tudo o que os futuros proprietários de lotes em condomínios de luxo na RMC perguntam
              antes de assinar o contrato de engenharia com a Veros.
            </p>
          </div>

          <div className="mt-14 space-y-4">
            {faqItems.map((item, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className={`border transition-all duration-200 ${
                    isOpen
                      ? 'border-amber-500/50 bg-[#14151a]'
                      : 'border-white/[0.08] bg-[#101115] hover:border-white/20'
                  }`}
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="font-cormorant text-xl sm:text-2xl font-semibold text-white">
                      {item.question}
                    </span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center border border-white/10 bg-white/[0.02] text-amber-400 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 bg-amber-500/10 border-amber-500/30' : ''
                      }`}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-6 pb-6 pt-2 text-sm sm:text-base text-slate-300 font-light leading-relaxed border-t border-white/[0.04]">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Quick FAQ Support Banner */}
          <div className="mt-12 p-6 border border-white/[0.08] bg-[#121316] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="text-sm font-semibold text-white font-cormorant text-lg">
                Possui um projeto executivo complexo ou lote com declive acentuado?
              </div>
              <div className="text-xs text-slate-400 font-mono mt-1">
                Nossos engenheiros geotécnicos e calculistas realizam análise preliminar gratuita.
              </div>
            </div>
            <a
              href={WHATSAPP_BASE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-amber-400/80 bg-amber-500/20 hover:bg-amber-500 text-amber-300 hover:text-black px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-colors whitespace-nowrap"
            >
              <span>Falar com Engenheiro Chefe</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* FINAL HIGH-IMPACT CTA SECTION (FECHAMENTO EXECUTIVO)                      */}
      {/* ========================================================================= */}
      <section className="relative py-24 bg-gradient-to-b from-[#08080a] via-[#101115] to-[#08080a] border-b border-white/[0.08] overflow-hidden">
        <div className="absolute inset-0 bg-amber-500/[0.02] pointer-events-none" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 border border-amber-500/40 bg-amber-500/10 px-3.5 py-1 text-xs font-mono text-amber-400 mb-6">
            <Shield className="w-3.5 h-3.5" />
            <span>EXCLUSIVIDADE • SLOTS LIMITADOS DE EXECUÇÃO ANUAL</span>
          </div>

          <h2 className="font-cormorant text-4xl sm:text-6xl font-semibold text-white tracking-tight leading-tight">
            Pronto para iniciar a obra da sua vida com a segurança de um contrato blindado?
          </h2>

          <p className="mt-6 text-lg text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
            Agende uma reunião executiva de alinhamento com a diretoria técnica da Veros Engenharia.
            Analisaremos as diretrizes do condomínio, a topografia do lote e as pranchas do seu arquiteto.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WHATSAPP_BASE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 border border-amber-400 bg-gradient-to-r from-amber-500 to-amber-600 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-black shadow-[0_0_35px_rgba(217,119,6,0.35)] transition-all hover:scale-[1.01] hover:brightness-110"
            >
              <Send className="h-4 w-4" />
              <span>Solicitar Reunião de Alinhamento Técnico</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href="tel:+5519994656845"
              className="inline-flex items-center justify-center gap-2 border border-white/20 bg-white/[0.04] px-6 py-4 text-sm font-medium text-slate-200 transition-colors hover:border-white/40"
            >
              <Phone className="h-4 w-4 text-amber-400" />
              <span>+55 (19) 99465-6845</span>
            </a>
          </div>

          <div className="mt-8 text-xs font-mono text-slate-500">
            Atendimento presencial em Campinas (Cambuí) ou em reunião privativa no condomínio da sua futura residência.
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. RODAPÉ CORPORATIVO E ASSINATURA OFICIAL PARVUS SPACE                    */}
      {/* ========================================================================= */}
      <footer className="relative bg-[#060708] border-t border-white/[0.08] pt-16 pb-12 text-slate-400">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.08]">
            {/* Brand & Technical Responsibility Column */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center border border-amber-500/40 bg-black">
                  <Compass className="h-5 w-5 text-amber-400" />
                </div>
                <div>
                  <div className="font-cormorant text-xl font-bold text-white leading-none">
                    VEROS ENGENHARIA
                  </div>
                  <div className="text-[10px] font-mono uppercase text-amber-400 font-medium tracking-widest mt-0.5">
                    Construções de Alto Padrão • Turnkey
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-400 font-light leading-relaxed max-w-sm">
                Boutique de engenharia civil especializada na execução de mansões contemporâneas e residências
                de altíssimo padrão com prazo milimétrico e orçamento travado em regime turnkey.
              </p>

              <div className="pt-2 text-xs font-mono text-slate-400 space-y-1">
                <div>
                  <strong className="text-slate-300">Responsável Técnico:</strong> Eng. Rafael D&apos;Ávila
                </div>
                <div>
                  <strong className="text-slate-300">Registro Profissional:</strong> CREA-SP 506.842.190-D
                </div>
                <div>
                  <strong className="text-slate-300">CNPJ:</strong> 42.189.920/0001-84 • Veros Engenharia Ltda.
                </div>
              </div>
            </div>

            {/* Operating Pole & Condos */}
            <div className="md:col-span-4 space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-200 font-semibold">
                Polo de Atendimento Residencial (RMC)
              </div>
              <ul className="text-xs space-y-2 text-slate-400">
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 bg-amber-400 rounded-full" />
                  <span>Alphaville Campinas & Alphaville Dom Pedro</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 bg-amber-400 rounded-full" />
                  <span>Swiss Park Campinas (Glarus, St. Moritz, Arosa)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 bg-amber-400 rounded-full" />
                  <span>Haras Larissa (Monte Mor / Campinas)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 bg-amber-400 rounded-full" />
                  <span>Quinta da Baroneza & Fazenda Boa Vista</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 bg-amber-400 rounded-full" />
                  <span>Entreverdes, Gramado & Haras Anchieta</span>
                </li>
              </ul>

              <div className="pt-2 text-xs text-slate-500 font-mono">
                Sede Executiva: Av. José de Souza Campos (Norte-Sul), Cambuí, Campinas / SP
              </div>
            </div>

            {/* Contact & Direct Channel */}
            <div className="md:col-span-3 space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-200 font-semibold">
                Canal Direto de Diretoria
              </div>
              <div className="space-y-2 text-xs">
                <a
                  href={WHATSAPP_BASE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-300 hover:text-amber-400 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>+55 (19) 99465-6845</span>
                </a>
                <div className="text-slate-400">
                  contato@verosengenharia.com.br
                </div>
                <div className="text-slate-500 font-mono text-[11px] pt-1">
                  Atendimento de Segunda a Sexta: 07h às 19h
                </div>
              </div>
            </div>
          </div>

          {/* Mandatory Parvus Space Signature and Credits */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
            <div>
              © 2026 Veros Engenharia & Construções de Alto Padrão. Todos os direitos reservados.
            </div>

            {/* Signature official: Digital Architecture by Parvus Space */}
            <div className="text-slate-400 text-center sm:text-right">
              <a
                href="https://parvuspace.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-slate-300 hover:text-amber-400 transition-colors font-medium"
              >
                <span>Digital Architecture by Parvus Space</span>
                <span className="text-slate-600">|</span>
                <span className="text-amber-400/90 underline underline-offset-4 group-hover:text-amber-300">
                  parvuspace.com.br
                </span>
                <ArrowUpRight className="w-3 h-3 text-slate-400 group-hover:text-amber-400" />
              </a>
              <div className="text-[11px] text-slate-500 mt-0.5">
                WhatsApp Comercial: +55 (19) 99465-6845
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* ========================================================================= */}
      {/* LIVE CCTV SITE DEMO MODAL (EXPERIÊNCIA INTERATIVA DE CANTEIRO DIGITAL)    */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {isLiveCamModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-3xl border border-white/[0.15] bg-[#121316] p-6 shadow-2xl"
            >
              {/* Top Bar of Modal */}
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono font-semibold uppercase text-slate-200">
                    Transmissão 4K Canteiro ao Vivo • Câmera PTZ 01 (Frente e Laje)
                  </span>
                </div>
                <button
                  onClick={() => setIsLiveCamModalOpen(false)}
                  className="text-slate-400 hover:text-white font-mono text-xs p-1"
                >
                  [FECHAR X]
                </button>
              </div>

              {/* Simulated High-Tech Stream Frame */}
              <div className="relative h-72 sm:h-96 w-full bg-[#08080a] border border-white/[0.08] overflow-hidden flex flex-col justify-between p-4">
                {/* Surveillance Camera Grid & Crosshairs */}
                <div
                  className="absolute inset-0 opacity-15 pointer-events-none"
                  style={{
                    backgroundImage: `
                      linear-gradient(to right, #38bdf8 1px, transparent 1px),
                      linear-gradient(to bottom, #38bdf8 1px, transparent 1px)
                    `,
                    backgroundSize: '50px 50px',
                  }}
                />

                {/* Simulated Camera View Overlay with Engineering Drawing */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <svg
                    viewBox="0 0 400 240"
                    className="w-full h-full stroke-slate-600/40 fill-none stroke-1"
                  >
                    <rect x="50" y="80" width="300" height="120" strokeDasharray="4 4" />
                    <line x1="200" y1="20" x2="200" y2="220" className="stroke-red-500/40" />
                    <line x1="20" y1="120" x2="380" y2="120" className="stroke-red-500/40" />
                    <circle cx="200" cy="120" r="30" className="stroke-red-500/40 stroke-dashed" />
                  </svg>
                </div>

                {/* Top Camera Information OSD */}
                <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-emerald-400 bg-black/70 p-2 border border-white/[0.06]">
                  <div>REC • CAM-01 • 3840x2160 @ 60FPS</div>
                  <div>CANTEIRO: ALPHAVILLE CAMPINAS • LOTE G-18</div>
                </div>

                {/* Simulated active construction message */}
                <div className="relative z-10 text-center py-4 bg-black/60 backdrop-blur-sm border border-white/[0.05] max-w-md mx-auto">
                  <Video className="w-8 h-8 text-amber-400 mx-auto mb-2 animate-bounce" />
                  <div className="font-cormorant text-xl text-white font-semibold">
                    Acesso Exclusivo para Clientes Veros
                  </div>
                  <div className="text-xs text-slate-300 font-mono mt-1 px-4">
                    Proprietários recebem credenciais seguras para acompanhar a obra em tempo real, 24 horas por dia, direto no celular ou iPad.
                  </div>
                </div>

                {/* Bottom OSD Bar */}
                <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-slate-400 bg-black/70 p-2 border border-white/[0.06]">
                  <div>DATA: 03/10/2026 • VENTO: 8km/h • UMIDADE: 58%</div>
                  <div className="text-amber-400">ENGENHARIA RESIDENTE ATIVA</div>
                </div>
              </div>

              {/* Action Button inside Modal */}
              <div className="mt-5 flex items-center justify-end gap-3">
                <button
                  onClick={() => setIsLiveCamModalOpen(false)}
                  className="px-4 py-2 border border-white/20 text-xs font-mono text-slate-300 hover:text-white"
                >
                  Fechar Visualizador
                </button>
                <a
                  href={WHATSAPP_BASE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black px-4 py-2 text-xs font-semibold uppercase tracking-wider font-mono"
                >
                  <span>Solicitar Demonstração do App</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
