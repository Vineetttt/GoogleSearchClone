import React from 'react'
import './SearchPage.css';
import {useStateValue} from "../StateProvider";
import useGoogleSearch from '../useGoogleSearch';
import {Link} from "react-router-dom";
import Search from "../components/Search";
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";




function SearchPage() {
    const [{term}, dispatch] = useStateValue();
    const { data } = useGoogleSearch(term);
    //const data = Response;
    console.log(data)
  return (
    <div className="searchPage">
        <div className="searchPageHeader">
          <Link to="/">
            <img className="searchPageLogo"
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" 
            alt="" />
          </Link>

          <div className="searchPageHeaderBody">
            <Search hideButtons></Search>

            <div className="searchPageOptions">
              <div className="searchPageOptionsLeft">
                <div className="searchPageOption">
                  <SearchIcon />
                  <Link to="/all">All</Link>
                </div>
                <div className="searchPageOption">
                  <DescriptionIcon />
                  <Link to="/news">News</Link>
                </div>
                <div className="searchPageOption">
                  <ImageIcon />
                  <Link to="/images">Images</Link>
                </div>
                <div className="searchPageOption">
                  <LocalOfferIcon />
                  <Link to="/shopping">Shopping</Link>
                </div>
                <div className="searchPageOption">
                  <RoomIcon />
                  <Link to="/maps">Maps</Link>
                </div>
                <div className="searchPageOption">
                  <MoreVertIcon />
                  <Link to="/more">More</Link>
                </div>
              </div>
              <div className="searchPageOptionsRight">
                <div className="searchPageOption">
                  <Link to="/settings">Settings</Link>
                </div>
                <div className="searchPageOption">
                  <Link to="/tools">Tools</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {term &&(
          <div className="searchPageResults">
            <p className="searchPageResultCount">
              Aboout {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for {term}
            </p>


            {data?.items.map(item => (
              <div className="searchPageResult">
                <a href={item.link}>
                {item.pagemap?.cse_image?.
                  length>0 && 
                  item.pagemap?.cse_image[0]?.
                  src && (
                  <img className='searchPageResultImage'
                  src={
                    item.pagemap?.
                    cse_image?.length>0 &&
                    item.pagemap?.
                    cse_image[0]?.src
                  }
                  alt=""
                  />
                )}
                  {item.displayLink}
                </a>
                <a href={item.link} className="searchPageResultTitle">
                  <h2>{item.title}</h2>
                </a>
                <p className="searchPageResultSnippet">
                  {item.snippet}
                </p>
              </div>
            ))}
          </div>
        )}
    </div>
  )
}

export default SearchPage;