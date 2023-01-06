import ScrollSuave from "./modules/scroll-suave.js";
import AccordeonList from "./modules/accordeon-list.js";
import NavTab from "./modules/tab-nav.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import DropdownMenu from "./modules/dropdown-menu.js";
import MenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import initFetchAnimais from "./modules/fetchAnimais.js";
import initFetchBitcoin from "./modules/fetch-bitcoin.js";
import AnimacaoScroll from "./modules/animacao-scroll.js";

const scrollSuave = new ScrollSuave('[data-menu="smooth"] a[href^="#"]');
scrollSuave.init();

const accordeonList = new AccordeonList("[data-anime='accordeon'] dt");
accordeonList.init();

const tabNav = new NavTab(
  "[data-tab='menu'] img",
  "[data-tab='conteudo'] .artigo",
  "ativo",
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

const animacaoScroll = new AnimacaoScroll("section[data-anime='scroll']");
animacaoScroll.init();

const dropdownMenu = new DropdownMenu("[data-dropdown]", ["touchstart", "click"], "ativo");
dropdownMenu.init();

const menuMobile = new MenuMobile("[data-menu='button']", '[data-menu="list"]', ["touchstart", "click"], "ativo");
menuMobile.init();

initFuncionamento();
initFetchAnimais();
initFetchBitcoin();
