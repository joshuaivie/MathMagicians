import React, { useState, useLayoutEffect } from 'react';
import PageTitle from '../components/Layout/PageTitle';
import PageContent from '../components/Layout/PageContent';
import '../styles/quotes.scss';

function Quotes() {
  const [loadingQuote, setLoadingQuote] = useState(true);
  const [currentQuote, setCurrentQuote] = useState('');

  useLayoutEffect(() => {
    setLoadingQuote(true);
    fetch('../data/quotes.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        const quoteLength = data.length;
        const quoteIndex = Math.floor((Math.random() * quoteLength - 1) + 0);
        setCurrentQuote(data[quoteIndex]);
      })
      .catch((error) => {
        console.log('Error loading data', error);
      })
      .finally(() => {
        setLoadingQuote(false);
      });
  }, []);

  return (
    <div className="quotes">
      <PageTitle>Math Quotes</PageTitle>
      <PageContent>
        {loadingQuote ? <div>Loading Quote</div> : (
          <div>
            <div className="quote">{currentQuote?.quote}</div>
            <div className="quote-author">{currentQuote?.author}</div>
          </div>
        )}

      </PageContent>
    </div>
  );
}

export default Quotes;
