import { Avatar, Button, Card, Space, Statistic } from "antd";
import React from "react";
import AudioPost from "../components/AudioPost";

const Profile = () => {
  const AudioPosts = [
    {
      trackName: "Electronic Music",
      artist: "DJCJ",
      albumArt:
        "https://i.pinimg.com/originals/59/ea/1d/59ea1d6e00d464d2c320309d399d8918.jpg",
      trackLink:
        "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      likeCount: "780",
      retweetCount: "40",
      shareCount: "10",
      userName: "Chiranjeeb Jena",
      userAvatar:
        "https://chatsgx.s3-us-east-2.amazonaws.com/chiranjib.jena@gmail.com/1628090376099.jpeg",
      timestamp: "1 days ago",
      tags: [
        "Electro",
        "DJCJ",
        "ElectroManic",
        "ProductivityTrack",
        "FeelTheBeat",
      ],
    },
    {
      trackName: "Rock Music",
      artist: "DJRK",
      albumArt:
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/4bb82b72535211.5bead62fe26d5.jpg",
      trackLink:
        "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      likeCount: "620",
      retweetCount: "30",
      shareCount: "20",
      userName: "Chiranjeeb Jena",
      userAvatar:
        "https://chatsgx.s3-us-east-2.amazonaws.com/chiranjib.jena@gmail.com/1628090376099.jpeg",
      timestamp: "2 days ago",
      tags: ["Rock", "DJRK", "RockManic", "TheRock", "ItsRocking"],
    },
    {
      trackName: "Insomaniac",
      artist: "21Pilots",
      albumArt:
        "https://images.complex.com/complex/images/c_fill,f_auto,g_center,w_1200/fl_lossy,pg_1/hcjrqlvc6dfhpjxob9nt/cudi",
      trackLink:
        "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      likeCount: "620",
      retweetCount: "30",
      shareCount: "20",
      userName: "Chiranjeeb Jena",
      userAvatar:
        "https://chatsgx.s3-us-east-2.amazonaws.com/chiranjib.jena@gmail.com/1628090376099.jpeg",
      timestamp: "3 days ago",
      tags: ["Rock", "DJRK", "RockManic", "TheRock", "ItsRocking"],
    },
  ];
  return (
    <>
      <div>
        <img
          src="https://pbs.twimg.com/profile_banners/58248091/1519574736/1500x500"
          alt=""
          height="280px"
          width="100%"
          style={{ borderRadius: "0px 0px 10px 10px" }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "-70px",
          }}
        >
          <Avatar
            size={130}
            src="https://chatsgx.s3-us-east-2.amazonaws.com/chiranjib.jena@gmail.com/1628090376099.jpeg"
          />
          <div
            style={{
              fontSize: "25px",
              fontWeight: "600",
              paddingTop: "10px",
              zIndex: "1",
              background: "#EBF4F8",
              padding: "2px 10px",
              color: "gray",
            }}
          >
            Chiranjeeb Jena
          </div>
          <div style={{ width: "90%", padding: "10px", marginTop: "-30px" }}>
            <div
              style={{
                // background: "white",
                border: "solid 1px gray",
                borderRadius: "10px",
                width: "100%",
                padding: "20px",
                paddingBottom: "40px",
                textAlign: "center",
                color: "gray",
              }}
            >
              <div style={{ padding: "10px 0px" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingTop: "20px",
                }}
              >
                <Card
                  style={{ width: "180px", borderRadius: "10px" }}
                  className="myshadow"
                >
                  <Statistic title="Following" value={200} />
                </Card>
                <Card
                  style={{ width: "180px", borderRadius: "10px" }}
                  className="myshadow"
                >
                  <Statistic title="Followers" value={345} />
                </Card>
                <Card
                  style={{ width: "180px", borderRadius: "10px" }}
                  className="myshadow"
                >
                  <Statistic title="Total Posts" value={500} />
                </Card>
                <Card
                  style={{ width: "180px", borderRadius: "10px" }}
                  className="myshadow"
                >
                  <Statistic title="Active Users" value={112893} />
                </Card>
              </div>
            </div>
          </div>
          <div
            style={{
              borderRadius: "10px",
              width: "200px",
              marginTop: "-40px",
              padding: "10px",
              background: "#EBF4F8",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              type="primary"
              size="large"
              style={{
                borderRadius: "10px",
                width: "200px",
              }}
            >
              Follow
            </Button>
          </div>
        </div>

        {AudioPosts.map((item) => {
          return <AudioPost item={item} />;
        })}
      </div>
    </>
  );
};

export default Profile;
