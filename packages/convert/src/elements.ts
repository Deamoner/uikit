const htmlElementConverter = {
  div: (props, content) => {
    props['class']
  },
  h1: (props, content) => {},
  h2: (props, content) => {},
  h3: (props, content) => {},
  p: (props, content) => {},
  a: (props, content) => {},
  img: (props, content) => {},
  ul: (props, content) => {},
  li: (props, content) => {},
  span: (props, content) => {},
  button: (props, content) => {},
  label: (props, content) => {},
  nav: (props, content) => {},
  footer: (props, content) => {},
  ol: (props, content) => {},
} satisfies Record<string, (props: Record<string, string>, content: string) => string>
/**
 * TBD
 * 
input
form
textarea
select
option
 */
