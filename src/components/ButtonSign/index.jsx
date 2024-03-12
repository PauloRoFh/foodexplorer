import PropTypes from 'prop-types';
import { Container } from './styles';

export function ButtonSign({ title, loading = false, ...rest }) {
  return (
    <Container
      type="button"
      disabled={loading}
      {...rest}
    >
      {loading ? 'Carregando...' : title}
    </Container >
  );
}

ButtonSign.propTypes = {
  title: PropTypes.string.isRequired,
  loading: PropTypes.bool,
};
