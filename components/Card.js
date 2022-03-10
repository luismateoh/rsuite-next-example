import React from "react";


const Card = ({
                  unsplashId,
                  title,
                  tags
              }) => {


    return (
        <>
            <div className="card">
                <div
                    className="cover"
                    style={{
                        backgroundImage: `url(https://source.unsplash.com/${unsplashId})`,
                    }}
                >

                    <div className="tags">
                        {tags.map((tag) => (
                            <span key={tag} className="tag">
                {tag}
              </span>
                        ))}
                    </div>
                </div>
                <div className="content">
                    <div className="subscription">
            <span className="title">
              {title}
            </span>
                    </div>
                </div>
            </div>
            <style jsx>{`
              .card {
                border: 1px solid #e5e7eb;
                border-radius: 8px;
                box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
                0 4px 6px -4px rgb(0 0 0 / 0.1);
                width: 300px;
                display: flex;
                flex-direction: column;
              }

              .cover {
                position: relative;
                height: 180px;
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
                color: #fff;
                padding: 10px 20px 10px;
                border-radius: 8px 8px 0 0;
                background-repeat: no-repeat;
                background-size: cover;
              }

              .cover::before {
                content: "";
                position: absolute;
                border-radius: 8px 8px 0 0;
                background: linear-gradient(0deg,
                rgba(0, 0, 0, 0.9) 0%,
                rgba(0, 0, 0, 0.2) 65%);
                inset: 0;
              }

              .tags {
                display: flex;
                justify-content: flex-start;
                gap: 10px;
                position: relative;
              }

              .tag {
                background: #475569;
                padding: 1px 10px;
                border-radius: 5px;
                font-size: 14px;
                text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.2);
                text-transform: capitalize;
              }

              .content {
                display: flex;
                flex-direction: column;
                padding: 20px;
              }

              .subscription {
                display: flex;
                align-items: center;
                font-size: 32px;
                font-weight: bold;
              }
            `}</style>
        </>
    );
};

export default Card;