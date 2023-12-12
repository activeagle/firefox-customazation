const SearchBar = () => {
    return(
        <div class="container">
            <div class="head">
                <div class="logo"><img src="icons/fox.svg" /></div>
                <div class="search_box">
                    <img class="engine" id="engineLogo" src="icons/google.svg" onclick="toggleEngine()" style="cursor:pointer" />
                    <div id="gSearch" style="display:block;">
                        <form id="textField" class="google" action="https://google.com/search" method="get">
                            <input class="input_box" type="text" name="q" placeholder="Search with Google">
                            <button class="button"> <img src="icons/search.svg" style="cursor:pointer" /></button>
                        </form>
                    </div>
                    <div id="dSearch" style="display:none;">
                        <form class="duck" action="https://duckduckgo.com/" method="get">
                            <input class="input_box" type="text" name="q" placeholder="Search with DuckDuckGo">
                            <button class="button"> <img src="icons/search.svg" style="cursor:pointer" /></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SearchBar;