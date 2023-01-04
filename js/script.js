import ScrollSuave from "./modules/scroll-suave.js";
import AccordeonList from "./modules/accordeon-list.js";
import NavTab from "./modules/tab-nav.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import initDropdownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import initFetchAnimais from "./modules/fetchAnimais.js";
import initFetchBitcoin from "./modules/fetch-bitcoin.js";
import initAnimacaoScroll from "./modules/animacao-scroll.js";

const scrollSuave = new ScrollSuave('[data-menu="smooth"] a[href^="#"]');
scrollSuave.init();

const accordeonList = new AccordeonList("[data-anime='accordeon'] dt");
accordeonList.init();

const tabNav = new NavTab(
  "[data-tab='menu'] img",
  "[data-tab='conteudo'] .artigo",
);
tabNav.init();

const modal = new Modal(
  "[data-modal='abrir']",
  "[data-modal='fechar']",
  "[data-modal='container']",
);
modal.init();

const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();

initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();
initAnimacaoScroll();
