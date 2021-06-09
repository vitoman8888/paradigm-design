import Highlight, { defaultProps } from 'prism-react-renderer';
import styles from './code.module.scss';
import theme from 'prism-react-renderer/themes/nightOwl';

const Code = (props) => {
  const language = props.children.props.className.replace(/lang-/, '') || '';

  return (
    <Highlight
      {...defaultProps}
      theme={theme}
      code={props.children.props.children}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={`${className} ${styles['pre']}`} style={style}>
          {tokens.map((line, i) => (
            <div
              className={styles['pre__row']}
              {...getLineProps({ line, key: i })}
            >
              <div className={styles['pre__lineNum']}>{1 + i}</div>
              <span className={styles['pre__lineCode']}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </span>
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default Code;