// import React, { useState, useEffect } from "react";
// import { get } from "../../utilities";

// import "../../utilities.css";
// import "./Profile.css";

// const Profile = (props) => {
//   const [user, setUser] = useState();

//   useEffect(() => {
//     document.title = "Profile Page";
//     get(`/api/account`, { googleid: props.userId }).then((userObj) => setUser(userObj));
//   }, []);

//   if (!user) {
//     return <div> Loading! </div>;
//   }
//   return (
//     <>
//       <div
//       >
//         <div className="Profile-avatar" />
//       </div>
//       <h1 className="Profile-name u-textCenter">{user.name}</h1>
//       <hr className="Profile-linejj" />
//       <div className="u-flex">
//         <div className="Profile-subContainer u-textCenter">
//           <h4 className="Profile-subTitle">Bio</h4>
//           <div id="profile-description">
//             I am really allergic to cats i don't know why i have a catbook
//           </div>
//         </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Profile;

import React, { useState, useEffect } from "react";
import { get } from "../../utilities";

// import "../../utilities.css";
// import "./Profile.css";

const Profile = (props) => {
  const [posts, setPosts] = useState([]);

  // called when the "Feed" component "mounts", i.e.
  // when it shows up on screen

  const [userId, setUserId] = useState(undefined);
  const [userName, setUserName] = useState(undefined);

  useEffect(() => {
    get("/api/whoami").then((user) => {
      if (user._id) {
        console.log(user);
        // they are registed in the database, and currently logged in.
        setUserId(user._id);
        setUserName(user.name);
      }
    });
  }, []);

  console.log("hi " + userId);
  console.log(userName);

  // useEffect(() => {
  //   document.title = "Profile Page";
  //   get(`/api/account`, { userid: props.userId }).then((userObj) => console.log(userObj));
  // }, []);

  useEffect(() => {
    get("/api/myposts", { user: props._id }).then((posts) => {
      setPosts(posts);
    });
  }, []);

  // this gets called when the user pushes "Submit", so their
  // post gets added to the screen right away
  // const addNewList = (storyObj) => {
  //   setStories([storyObj].concat(stories));
  // };

  let postsList = null;
  const hasPosts = posts.length !== 0;

  // const Profile = (props) => {
  //   const [user, setUser] = useState();

  //   console.log(user);
  //   console.log(props);

  //   useEffect(() => {
  //     document.title = "Profile Page";
  //     get(`/api/user`, { userid: props.userId }).then((userObj) => setUser(userObj));
  //   }, []);

  //   const incrementCatHappiness = () => {
  //     setCatHappiness(catHappiness + 1);
  //   };

  //   if (!user) {
  //     return <div> Loading! </div>;
  //   }
  //   return (
  //     <>
  //       <div
  //         className="Profile-avatarContainer"
  //         onClick={() => {
  //           incrementCatHappiness();
  //         }}
  //       >
  //         <div className="Profile-avatar" />
  //       </div>
  //       <h1 className="Profile-name u-textCenter">{user.name}</h1>
  //       <hr className="Profile-linejj" />
  //       <div className="u-flex">
  //         <div className="Profile-subContainer u-textCenter">
  //           <h4 className="Profile-subTitle">About Me</h4>
  //           <div id="profile-description">
  //             I am really allergic to cats i don't know why i have a catbook
  //           </div>
  //         </div>
  //         <div className="Profile-subContainer u-textCenter">
  //           <h4 className="Profile-subTitle">Cat Happiness</h4>
  //           <CatHappiness catHappiness={catHappiness} />
  //         </div>
  //         <div className="Profile-subContainer u-textCenter">
  //           <h4 className="Profile-subTitle">My Favorite Type of Cat</h4>
  //           <div id="favorite-cat">corgi</div>
  //         </div>
  //       </div>
  //     </>
  //   );
  // };

  //export default Profile;

  if (hasPosts) {
    postsList = posts.map((postObj) => (
      <Card
        key={`Card_${postObj._id}`}
        _id={listObj._id}
        creator_name={postObj.creator_name}
        content={postObj.content}
      />
    ));
  } else {
    postsList = <div>No packing lists yet!</div>;
  }
  return (
    <>
      {/* <NewList addNewList={addNewList} /> */}
      {postsList}
      {userName}
    </>
  );
};

export default Profile;