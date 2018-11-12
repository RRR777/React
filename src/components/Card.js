import React from 'react';
import { getImageUrl } from '../../config';
import { addHeart, removeHeart, addCard, removeCard } from "../actions";
import { logHeartAddition,logHeartRemoval } from "../thunks";
import { connect } from 'react-redux';

class Card extends React.Component {
  constructor() {
    super();
  }

  render() {
    const {
      opened,
      hearted,
      onAddCard,
      onRemoveCard,
      onAddHeart,
      onRemoveHeart,
      movie: {
        backdrop_path,
        original_title,
        overview,
        release_date,
        vote_average,
        vote_count,
        id,
      },
    } = this.props;

    const isHearted = hearted.indexOf(id) === -1;
    const isOpened = opened.indexOf(id) === -1;

    return (
      <div className="card">
        <div
          className="card__image"
          style={{ backgroundImage: `url(${getImageUrl(backdrop_path)})` }}
        />

            <div className="card__title">
                {original_title}
            </div>

            <div className="card__like" onClick={()=>{isHearted ? onAddHeart(id,original_title) : onRemoveHeart(id,original_title)}}>
                <i className={`fa fa-heart${isHearted ? '-o' : ''}`} />
            </div>

            <div className="card__subtitle">
              <span>{release_date}</span>
              <span>{vote_average} ({vote_count} votes)</span>
            </div>

            <div className="card-info">
                <div className="card-info__header" onClick={() => {isOpened ? onAddCard(id) : onRemoveCard(id)}}>
                    Summary
                </div>
            </div>

            { !isOpened ? <div className="card-info__description">{overview}</div> : null }

      </div>
    );
  }
}

export default connect(
    (state) => {
        return {
            hearted: state.hearted,
            opened: state.cardsOpened,
        };
    },
    (dispatch) => {
        return {
            onAddCard: (id) => dispatch(addCard(id)),
            onRemoveCard: (id) => dispatch(removeCard(id)),
            onAddHeart: (id,movieName) => {dispatch(addHeart(id)); dispatch(logHeartAddition(movieName))},
            onRemoveHeart: (id,movieName) => {dispatch(removeHeart(id));dispatch(logHeartRemoval(movieName))},
        };
    },
)(Card);

