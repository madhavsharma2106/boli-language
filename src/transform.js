const { traverse } = require('./traverse');

const transform = (node) => {
  traverse(node, {
    CallExpression: {
      enter({ node }) {
        if (specialForms[node.name]) {
          specialForms[node.name](node);
        }
      },
    },
  });
  return node;
};

// CallExpression
//    - name (maano)
//    - arguments (identifier, assignment)

// VariableDeclaration

const specialForms = {
  maano(node) {
    const [identifier, assignment] = node.arguments;
    node.type = 'VariableDeclaration';
    node.identifier = identifier;
    node.assignment = assignment;
    delete node.name;
    delete node.arguments;
  },
};

module.exports = { specialForms, transform };
