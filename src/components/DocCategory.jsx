const DocCategory = () => {
    return (
        <div className="bookmark">
            <div className="category">
                <div className="icon"><img src="./icons/docks.svg" /></div>
                <div className="bookmarks doc">
                    <li><a className="bm" href="https://en.cppreference.com/w/">C++</a></li>
                    <li><a className="bm" href="https://docs.python.org/3.7/library/index.html">Python</a></li>
                    <li><a className="bm" href="https://mail.google.com/mail/u/0/h/">Mail</a></li>
                    <li><a className="bm" href="https://github.com/dbuxy218">Github</a></li>
                    <li><a className="bm" href="https://mega.nz/">Mega</a></li>
                </div>
            </div>
        </div>
    )
}

export default DocCategory;