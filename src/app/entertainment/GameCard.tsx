"use client";

import { useEffect, useRef, useState } from "react";

const choices = ["Rock", "Paper", "Scissors"] as const;

type Choice = (typeof choices)[number];

const getResult = (player: Choice, computer: Choice) => {
  if (player === computer) return "It's a tie!";
  if (
    (player === "Rock" && computer === "Scissors") ||
    (player === "Paper" && computer === "Rock") ||
    (player === "Scissors" && computer === "Paper")
  ) {
    return "You win!";
  }
  return "Computer wins!";
};

export default function GameCard() {
  const [playerChoice, setPlayerChoice] = useState<Choice | null>(null);
  const [computerChoice, setComputerChoice] = useState<Choice | null>(null);
  const [result, setResult] = useState("Pick a move to play.");
  const [isShuffling, setIsShuffling] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const play = (choice: Choice) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setPlayerChoice(choice);
    setComputerChoice(null);
    setResult("Shuffling...");
    setIsShuffling(true);

    timerRef.current = window.setTimeout(() => {
      const computer = choices[Math.floor(Math.random() * choices.length)];
      setComputerChoice(computer);
      setResult(getResult(choice, computer));
      setIsShuffling(false);
    }, 900);
  };

  const resetGame = () => {
    setPlayerChoice(null);
    setComputerChoice(null);
    setResult("Pick a move to play.");
  };

  return (
    <div className="flex h-full flex-col rounded-3xl border border-white/10 bg-slate-900 p-6 shadow-xl shadow-cyan-500/10">
      <div className="space-y-4 flex-1">
        <p className="text-cyan-300 font-semibold">Rock Paper Scissors</p>
        <p className="text-gray-300 text-sm">
          Choose your move and try to beat the computer. A quick game to play between tasks.
        </p>

        <div className="grid grid-cols-3 gap-3">
          {choices.map((choice) => (
            <button
              key={choice}
              type="button"
              onClick={() => play(choice)}
              disabled={isShuffling}
              className={`rounded-2xl border px-4 py-3 text-sm font-semibold text-cyan-100 transition ${isShuffling ? "border-cyan-500/30 bg-cyan-500/5 opacity-70 cursor-not-allowed" : "border-cyan-300/20 bg-cyan-500/10 hover:border-cyan-300 hover:bg-cyan-500/20"}`}
            >
              {choice}
            </button>
          ))}
        </div>

        <div className={`rounded-2xl border border-white/10 bg-white/5 p-4 ${isShuffling ? "animate-pulse" : ""}`}>
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="text-2xl">🪨</span>
            <span className="text-2xl">📄</span>
            <span className="text-2xl">✂️</span>
          </div>
          <p className="text-gray-300 text-sm">Your move: <span className="text-white">{playerChoice || "—"}</span></p>
          <p className="text-gray-300 text-sm">Computer move: <span className="text-white">{computerChoice || "—"}</span></p>
          <p className="mt-3 text-lg font-semibold text-cyan-300">{result}</p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-slate-950 p-4 text-sm text-gray-300">
          <p className="font-semibold text-cyan-300">Game tips</p>
          <p className="mt-2">Choose your move and wait for the reveal. Reset if you want to start a fresh round.</p>
        </div>
      </div>

      <button
        type="button"
        onClick={resetGame}
        className="mt-4 rounded-full border border-cyan-300 px-4 py-2 text-sm font-semibold text-cyan-300 hover:bg-cyan-400/10"
      >
        Reset game
      </button>
    </div>
  );
}
