import React, { useState, useEffect } from 'react';
import Rating from 'react-rating';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Characteristics from './Characteristics';

const Ratings = (props) => {
  const {
    rating, metaData, setReviews, sortedReviews, count,
  } = props;

  const [totalRatings, setTotalRatings] = useState(0);
  const [starFilters, setStarFilters] = useState([]);

  const percentRecommend = () => {
    if (Object.keys(metaData).length > 0) {
      const recommend = Number(metaData.recommended.true);
      const notRecommend = Number(metaData.recommended.false);
      if (recommend === 0 || recommend === null) {
        return ('0%');
      }
      return (
        `${(recommend / (recommend + notRecommend)).toFixed(2) * 100}%`
      );
    }
    return null;
  };

  const mapCharacteristics = () => {
    if (Object.keys(metaData).length > 0) {
      return (
        Object.keys(metaData.characteristics).map((characteristic, index) => (
          <Characteristics
            characteristic={characteristic}
            key={index}
            objValue={metaData.characteristics}
          />
        ))
      );
    }
    return null;
  };

  useEffect(() => {
    findTotalRatings();
  }, [metaData.ratings]);

  const findTotalRatings = () => {
    if (metaData.ratings) {
      let sumRatings = null;
      // eslint-disable-next-line no-restricted-syntax
      for (const key in metaData.ratings) {
        if (metaData.ratings[key] !== null) {
          sumRatings += parseFloat(metaData.ratings[key]);
        }
      }
      if (sumRatings > 0) {
        setTotalRatings(sumRatings);
      }
    }
  };

  const ratingSort = (numStar) => {
    if (starFilters.includes(numStar)) {
      setStarFilters(starFilters.filter((star) => star !== numStar));
      const resultSort = sortedReviews.filter((review) => starFilters.includes(review.rating));
      setReviews(resultSort.slice(0, count));
    } else {
      setStarFilters([...starFilters, numStar]);
      const resultSort = sortedReviews.filter((review) => starFilters.includes(review.rating));
      setReviews(resultSort.slice(0, count));
    }
  };

  const progressbars = (star) => {
    if (metaData.ratings && totalRatings > 0) {
      const now = (metaData.ratings[star] / totalRatings) * 100;
      const checkZeroReviews = Number.isNaN(now);
      const zeroBar = <ProgressBar variant="success" now={0} />;
      const progressInstance = <ProgressBar variant="success" now={now} />;
      return (
        <>
          <div className="ratingbreakdown-side" onClick={() => ratingSort(star)} aria-hidden="true" role="button">
            {star}
            {' '}
            Star
          </div>
          <div className="ratingbreakdown-middle">
            {checkZeroReviews ? zeroBar : progressInstance}
          </div>
          <div className="ratingbreakdown-right">
            {metaData.ratings[star] || '0'}
          </div>
        </>
      );
    }
    return null;
  };

  return (
    <div className="ratingsInner-container">
      <div className="ratings-header">
        <span className="ratingNumber">
          {rating.toFixed(1)}
        </span>
        <Rating
          initialRating={rating}
          readonly
          emptySymbol="far fa-star"
          fullSymbol="fas fa-star"
        />
        {' '}
        {totalRatings}
        {' '}
        ratings
      </div>
      <div className="ratingbreakdown">
        Rating Breakdown
        <div>
          {progressbars(5)}
          {progressbars(4)}
          {progressbars(3)}
          {progressbars(2)}
          {progressbars(1)}
        </div>
        <div className="percentRecommend">
          {percentRecommend()}
          {' '}
          of reviews recommend the product
        </div>
        {mapCharacteristics()}
      </div>
    </div>
  );
};

export default Ratings;
