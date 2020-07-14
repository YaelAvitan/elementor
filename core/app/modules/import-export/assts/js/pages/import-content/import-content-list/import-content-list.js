import { Context as ImportContext } from '../../../context/import';
import KitContentList from '../../../shared/kit-content/kit-content-list/kit-content-list';

export default function ImportContentList() {
	const { importContent } = React.useContext( ImportContext );

	return <KitContentList type="import" content={ importContent } />;
}

ImportContentList.propTypes = {
	classname: PropTypes.string,
};

ImportContentList.defaultProps = {
	className: '',
};

