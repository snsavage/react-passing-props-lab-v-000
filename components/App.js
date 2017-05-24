import React from 'react';
import FruitBasket from './FruitBasket';

export default class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null
    }
    this.fetchFilters = this.fetchFilters.bind(this);
    this.fetchFruits = this.fetchFruits.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleFilterChange(e) {
    const target = e.target.value;
    const newFilter = target === "all" ? null : target;

    this.setState({ currentFilter: newFilter });
  }

  componentWillMount() {
    this.fetchFilters();
    this.fetchFruits();
  }

  fetchFilters() {
    fetch('/api/fruit_types')
      .then(res => res.json())
      .then(filters => this.setState({filters: filters}));
  }

  fetchFruits() {
    fetch('/api/fruit')
      .then(res => res.json())
      .then(fruit => this.setState({fruit: fruit}));
  }

  render() {
    return (
      <FruitBasket
        fruit={this.state.fruit}
        filters={this.state.filters}
        updateFilterCallback={this.handleFilterChange}
        currentFilter={this.state.currentFilter} />
    );
  }
}
