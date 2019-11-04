import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import Select, { Styles } from 'react-select';

import './scss/portofolio.scss';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Project from '../components/Project';

import { selectOptions, dummyProjects } from '../data/portofolio';

const selectStyles: Styles = {
  placeholder: base => ({ ...base, color: 'var(--tertiary)' }),
  container: base => ({
    ...base,
    outline: 'none',
  }),
  control: base => ({
    ...base,
    border: '2px solid var(--tertiary)',
    outline: 'none',
    boxShadow: 'none',
    ':hover': { border: '2px solid var(--tertiary)' },
  }),
  multiValue: base => ({ ...base, color: 'white', backgroundColor: 'var(--primary)' }),
  multiValueLabel: base => ({ ...base, color: 'white', fontSize: 14 }),
  multiValueRemove: base => ({ ...base, ':hover': { backgroundColor: 'var(--secondary)' } }),
};

const Portfolio = () => {
  const [filters, setFilters] = useState([]);
  const [data, setData] = useState(dummyProjects);

  useEffect(() => {
    if (!filters || filters.length === 0) setData(dummyProjects);
    else setData(dummyProjects.filter(project => filters.map(filter => filter.value).includes(project.type)));
  }, [filters]);

  const title = (
    <h1 className="section">
      <span>Hasil Karya Kami</span>
    </h1>
  );

  const filter = () => {
    return (
      <div className="section filters">
        <h4>Platform: </h4>
        <Select
          value={filters}
          onChange={selectedOption => setFilters(selectedOption)}
          options={selectOptions}
          isMulti
          isSearchable={false}
          className="select"
          styles={selectStyles}
        />
      </div>
    );
  };

  const projects = () => {
    return (
      <div className="section projects">
        {data.map((project, index) => (
          <Project {...project} key={index} />
        ))}
      </div>
    );
  };

  const offer = (
    <div className="section offer">
      <h2>Ingin ide kamu direalisasikan juga?</h2>
      <Link to="/request">
        <button>Request Disini</button>
      </Link>
    </div>
  );

  return (
    <Layout>
      <SEO title="Portofolio" />
      <section className="portofolio">
        {title}
        {filter()}
        {projects()}
        {offer}
      </section>
    </Layout>
  );
};

export default Portfolio;
