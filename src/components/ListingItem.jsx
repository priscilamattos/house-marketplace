import { Link } from "react-router-dom";

import bathIcon from "../assets/svg/bathtubIcon.svg";
import bedIcon from "../assets/svg/bedIcon.svg";
import { ReactComponent as DeleteIcon } from "../assets/svg/deleteIcon.svg";

const ListingItem = ({ listing, id, onDelete }) => {
  console.log(
    "🚀 ~ file: ListingItem.jsx ~ line 8 ~ ListingItem ~ listing",
    listing
  );
  return (
    <li className="categoryListing">
      <Link
        to={`/category/${listing.type}/${id}`}
        className="categoryListingLink"
      >
        {listing.imgURLs && listing.imgURLs.lenght ? (
          <img
            src={listing?.imgURLs[0]}
            alt={listing.name}
            className="categoryListingImg"
          />
        ) : null}
        <div className="categoryListingDetails">
          <p className="categoryListinLocation">{listing.location}</p>
          <p className="categoryListingName">{listing.name}</p>
          <p className="categoryListingPrice">
            $
            {listing.offer
              ? listing.discountedPrice
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              : listing.regularPrice
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            {listing.type === "rent" && " / Month"}
          </p>
          <div className="categoryListinginfoDiv">
            <img src={bedIcon} alt="bed" />
            <p className="categoryListingInfoText">
              {listing.bedrooms > 1
                ? `${listing.bedrooms} Bedrooms`
                : "1 Bedroom"}
            </p>
            <img src={bathIcon} alt="bath" />
            <p className="categoryListingInfoText">
              {listing.bathrooms > 1
                ? `${listing.bathrooms} Bathrooms`
                : "1 Bathroom"}
            </p>
          </div>
        </div>
      </Link>
      {onDelete && (
        <DeleteIcon
          className="removeIcon"
          fill="rgb(231, 76, 60)"
          onClick={() => onDelete(listing.id, listing.name)}
        />
      )}
    </li>
  );
};

export default ListingItem;
