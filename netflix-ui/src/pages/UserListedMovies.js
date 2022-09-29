import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import { getUsersLikedMovies } from "../store";

import Card from "../components/Card";
import Navbar from "../components/Navbar";

import styled from "styled-components";

const UserListedMovies = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [email, setEmail] = useState(undefined);

  const movies = useSelector((state) => state.netflix.movies);

  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) setEmail(currentUser.email);
    else navigate("/login");
  });

  useEffect(() => {
    if (email) {
      dispatch(getUsersLikedMovies(email));
    }
  }, [email]);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <Container>
      <Navbar isScrolled={isScrolled} />
      <div className="content flex column">
        <h1>My List</h1>
        <div className="grid flex">
          {movies.map((movie, index) => {
            return (
              <Card key={movie.id} movieData={movie} index={index} isLiked={true} />
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default UserListedMovies;

const Container = styled.div`
  .content {
    margin: 2.3rem;
    margin-top: 8rem;
    gap: 3rem;
    h1 {
      margin-left: 3rem;
    }
    .grid {
      flex-wrap: wrap;
      gap: 1rem;
    }
  }
`;