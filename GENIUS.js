import React, { useState, useEffect, useRef } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const GRID_SIZE = 3;
const LEVELS = {
  easy: { speed: 1000, backgroundColor: 'green' },
  medium: { speed: 750, backgroundColor: 'orange' },
  hard: { speed: 562, backgroundColor: 'red' },
};

const GeniusGame = () => {
  const [sequence, setSequence] = useState([]);
  const [userSequence, setUserSequence] = useState([]);
  const [flashing, setFlashing] = useState(null);
  const [level, setLevel] = useState('easy');
  const [round, setRound] = useState(1);
  const [isPlayingSequence, setIsPlayingSequence] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [unlockedLevels, setUnlockedLevels] = useState(new Set(['easy']));
  const flashingTimeout = useRef(null); // Adicionamos um useRef para o timeout

  useEffect(() => {
    if (round === 5) {
      setLevel('medium');
      setUnlockedLevels((prev) => new Set(prev).add('medium'));
    }
    if (round === 10) {
      setLevel('hard');
      setUnlockedLevels((prev) => new Set(prev).add('hard'));
    }
  }, [round]);

  const addStepToSequence = (prevSequence) => {
    return [...prevSequence, Math.floor(Math.random() * 9)];
  };

  const startNewGame = (selectedLevel = level) => {
    setLevel(selectedLevel);
    setRound(1);
    const newSequence = addStepToSequence([]);
    setSequence(newSequence);
    setUserSequence([]);
    setGameOver(false);
    playSequence(newSequence);
  };

  const playSequence = async (seq) => {
    if (seq.length === 0) return;
    setIsPlayingSequence(true);
    for (let i = 0; i < seq.length; i++) {
      await new Promise((resolve) => {
        setTimeout(() => {
          setFlashing(seq[i]);
          flashingTimeout.current = setTimeout(() => {
            setFlashing(null);
            resolve();
          }, LEVELS[level].speed / 2);
        }, i * LEVELS[level].speed);
      });
    }
    setIsPlayingSequence(false);
  };

  const handlePress = (index) => {
    if (isPlayingSequence || gameOver) return;

    const newUserSequence = [...userSequence, index];
    setUserSequence(newUserSequence);

    if (newUserSequence.join('') === sequence.slice(0, newUserSequence.length).join('')) {
      if (newUserSequence.length === sequence.length) {
        setTimeout(() => {
          setRound(round + 1);
          const newSeq = addStepToSequence(sequence);
          setSequence(newSeq);
          setUserSequence([]);
          playSequence(newSeq);
        }, 1000);
      }
    } else {
      setGameOver(true);
    }
  };

  useEffect(() => {
    startNewGame();
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: LEVELS[level].backgroundColor }]}>
      {gameOver ? (
        <View style={styles.errorScreen}>
          <Text style={styles.errorText}>Você errou! Comece novamente</Text>
          <TouchableOpacity onPress={() => startNewGame()} style={styles.button}>
            <Text>Recomeçar</Text>
          </TouchableOpacity>
          {Array.from(unlockedLevels).map((lvl) => (
            <TouchableOpacity key={lvl} onPress={() => startNewGame(lvl)} style={styles.button}>
              <Text>{lvl.charAt(0).toUpperCase() + lvl.slice(1)}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ) : (
        <>
          <Text style={styles.title}>Genius Game</Text>
          <Text style={styles.round}>Rodada: {round}</Text>
          <View style={styles.grid}>
            {Array.from({ length: GRID_SIZE }).map((_, row) => (
              <View key={row} style={styles.row}>
                {Array.from({ length: GRID_SIZE }).map((_, col) => {
                  const index = row * GRID_SIZE + col;
                  return (
                    <TouchableOpacity
                      key={index}
                      style={[styles.square, flashing === index && styles.flashing]}
                      onPress={() => handlePress(index)}
                      disabled={isPlayingSequence}
                    />
                  );
                })}
              </View>
            ))}
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 20 },
  round: { fontSize: 18, marginBottom: 10 },
  grid: {},
  row: { flexDirection: 'row' },
  square: { width: 60, height: 60, margin: 5, backgroundColor: 'gray' },
  flashing: { backgroundColor: 'yellow' },
  button: { padding: 10, backgroundColor: 'lightblue', margin: 5 },
  errorScreen: { justifyContent: 'center', alignItems: 'center' },
  errorText: { fontSize: 22, color: 'red', marginBottom: 20 },
});

export default GeniusGame;
