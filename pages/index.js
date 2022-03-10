import Page from 'components/Page'
import {Stack} from 'rsuite';
import Card from "../components/Card";
import modelCard from '../data/modelsCard.json'


export default function PageIndex() {

    return (<>
        <Page className="main">

            <Stack>

                <img
                    src={`/icons/sun.svg`}
                />

                <h1>Antares</h1>
            </Stack>
            <div className="cards">
                {modelCard.map(card => (
                    <div key={card.key}>
                        <Card
                            title={card.title}
                            unsplashId={card.unsplashId}
                            tags={card.tags}
                        />
                    </div>

                ))}
            </div>
        </Page>
        <style jsx>{`
          img {

            width: 40px;
            margin-right: 10px;
          }

          .cards {
            padding: 0 20px;
            min-height: 100%;
            display: grid;
            gap: 30px;
            place-content: center;
            max-width: 800px;
            margin: 20px auto;
            grid-template-columns: minmax(300px, 1fr);
          }

          @media only screen and (min-width: 800px) {
            .cards {
              max-width: 900px;
              grid-template-columns: repeat(2, minmax(300px, 1fr));
            }
          }

          @media only screen and (min-width: 1000px) {
            .cards {
              max-width: 1200px;
              grid-template-columns: repeat(3, minmax(300px, 1fr));
            }
          }

        `}
        </style>
    </>)

}
