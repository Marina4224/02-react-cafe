import css from './VoteStats.module.css';


interface VoteStatsProps {
  good: number;
  neutral: number;
  bad: number;
  total: number;
  positiveRate: number;
}

export default function VoteStats({
  good,
  neutral,
  bad,
  total,
  positiveRate,
}: VoteStatsProps) {
  return (
    <div className={css.container}>
  <p className={css.stat}>Good: <strong>{good}</strong></p>
  <p className={css.stat}>Neutral: <strong>{neutral}</strong></p>
  <p className={css.stat}>Bad: <strong>{bad}</strong></p>
  <p className={css.stat}>Total: <strong>{total}</strong></p>
  <p className={css.stat}>Positive feedback: <strong>{positiveRate}%</strong></p>
</div>
  );
}