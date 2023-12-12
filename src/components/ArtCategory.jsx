const ArtCategory = () => {
    return (
		<div class="bookmark">
			<div class="category">
                <div class="logo"><img src="./icons/art.svg" /></div>
                {/* <div class="logo" src="icons/art.svg" alt="logo" /> */}
                <div class="bookmarks art">
                    <li><a class="bm" href="https://www.behance.net/">Behance</a></li>
                    <li><a class="bm" href="https://www.deviantart.com/">Deviantart</a></li>
                    <li><a class="bm" href="https://www.tumblr.com/dashboard">Tumblr</a></li>
                    <li><a class="bm" href="https://unsplash.com/">Unsplash</a></li>
                    <li><a class="bm" href="https://in.pinterest.com/">Pinterest</a></li>
                </div>
			</div>
		</div>
    )
}

export default ArtCategory;