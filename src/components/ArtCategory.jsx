
const ArtCategory = () => {
    return (
		// <div className="bookmark">
			<div className="category">
                <div className="icon"><img src="./icons/art.svg" /></div>
                {/* <div className="logo" src={art} alt="logo" /> */}
                <div class="bookmarks art">
                  <li><a class="bm" href="https://www.behance.net/">Behance</a></li>
                  <li><a class="bm" href="https://www.wallheaven.cc">Wallheaven</a></li>
                  <li><a class="bm" href="https://www.tumblr.com/dashboard">Tumblr</a></li>
                  <li><a class="bm" href="https://unsplash.com/">Unsplash</a></li>
                  <li><a class="bm" href="https://in.pinterest.com/">Pinterest</a></li>
              </div>
			</div>
		// </div>
    )
}

export default ArtCategory;