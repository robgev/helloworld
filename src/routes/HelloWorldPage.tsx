import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';
import styles from './HelloWorldPage.module.css';

export function HelloWorldPage() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const titleClassName = prefersReducedMotion
    ? `${styles.title} ${styles.reducedMotion}`
    : styles.title;

  return (
    <main
      className={styles.container}
      data-testid="hello-container"
      data-hello-world="container"
      data-reduced-motion={prefersReducedMotion ? 'true' : 'false'}
    >
      <h1
        className={titleClassName}
        data-testid="hello-text"
        data-hello-world="text"
      >
        Hello World
      </h1>
    </main>
  );
}
