import { css } from "@emotion/css";
import Editor from "@monaco-editor/react";
import TopBar from "../components/TopBar";
import "../styles/Index.css";

// @ts-ignore no types yet
import Terminal from "react-console-emulator";

import { useRef } from "react";

function Index() {
  const editorRef = useRef<any>(null);
  const getCode = (): string => editorRef.current.getValue();

  const defaultValue = `mortal(X) :- man(X).
man('John').
`;

  const edtmContainer = css`
    height: 100%;
    display: flex;
    flex-direction: row;
  `;

  const monacoContainer = css`
    flex: 1.25;
    margin: 0.75rem;
  `;

  const commands = {
    _: {
      fn: async (...commands: string[]) => {
        const command = commands.join(" ");
        const session = pl.create();

        try {
          await session.promiseConsult(getCode());
        } catch (e) {
          return `compile failed: ${e}`;
        }

        // command is the goal here
        try {
          await session.promiseQuery(command);
        } catch (e) {
          return `invalid goal: ${e}`;
        }

        let result = "";

        try {
          for await (let answer of session.promiseAnswers()) {
            result += session.format_answer(answer) + "\n";
          }
        } catch (e) {
          return `error while finding answer: ${e}`;
        }

        return result;
      },
    },
  };

  return (
    <div id="croot">
      <TopBar />
      <div className={edtmContainer}>
        <div className={monacoContainer}>
          <Editor
            height="100%"
            defaultLanguage="prolog"
            defaultValue={defaultValue}
            theme="vs-dark"
            options={{
              fontSize: 22,
            }}
            onMount={(editor) => {
              editorRef.current = editor;
            }}
          />
        </div>
        <div
          className={css`
            flex: 0.75;
            height: 100%;
            margin-top: 0.75rem;
            margin-bottom: 0.75rem;
            margin-right: 0.5rem;
          `}
        >
          <Terminal
            commands={commands}
            welcomeMessage={"Prolide v0.0.1 Alpha"}
            promptLabel={"?- "}
            style={{ height: "100%" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Index;
