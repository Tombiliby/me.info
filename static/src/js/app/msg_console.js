var consoleStyle_title = [
		"font-size: 16px"
		, "font-family: Helvetica, Arial, sans-serif"
    , "font-weight: bold"
    , "line-height: 22px"
    , "color: #333"
].join(';');

var consoleStyle_body = [
		"font-size: 14px"
    , "font-family: Helvetica, Arial, sans-serif"
    , "color: #333"
].join(';');

console.log("%cHey hey,", consoleStyle_title);
console.log("%cVous semblez bien curieux du front-end de mon CV.\nLes sources, si vous le souhaitez, sont ici : https://github.com/Tombiliby/me.info", consoleStyle_body);
console.log("\n");
console.log("%cPour toute autre information n'hésitez pas à me contacter", consoleStyle_body);

