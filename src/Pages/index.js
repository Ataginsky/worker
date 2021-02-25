import { Link, Redirect, useParams, useRouteMatch } from "react-router-dom";
import cx from "classnames";


export function PagePlannings(props) {
	return (
		<>
			<div className={cx("firstHeaderElementStyle mb-8 justify-between")}>
				<input type="text" className="h-full bg-gray-100 p-2 px-4 text-sm rounded-full" placeholder="Search..." />
				<span>10 may - 13 may</span>
			</div>

			<h3>To do</h3>
		</>
	)
}

export function PageTeams(props) {
	return <div>Je suis teams</div>
}

export function PageForms(props) {
	const { url } = useRouteMatch();

	return <div>
		Liste de toutes les fiches de l'utilisateur connecté:
		<ul>
			<li><Link to={`${url}/123456`}>Fiche une</Link></li>
			<li><Link to={`${url}/456789`}>Fiche deux</Link></li>
		</ul>
	</div>
}

export function PageFormsId(props) {
	const { id } = useParams();

	return <div>
		Je suis la fiche avec l'id {id}
	</div>
}

export function PageWarehouses(props) {
	return (
		<>
			<div className={cx("firstHeaderElementStyle mb-8 justify-between")}>
				<input type="text" className="h-full bg-gray-100 p-2 px-4 text-sm rounded-full" placeholder="Search..." />
				<span>10 may - 13 may</span>
			</div>

			<h3>Entrepôts</h3>
		</>
	)
}

export function PageAccounting(props) {
	return (
		<>
			<div className={cx("firstHeaderElementStyle mb-8 justify-between")}>
				<input type="text" className="h-full bg-gray-100 p-2 px-4 text-sm rounded-full" placeholder="Search..." />
				<span>10 may - 13 may</span>
			</div>

			<h3>Comptabilité</h3>
		</>
	)
}

export function PageSettings(props) {
	return (
		<>
			<div className={cx("firstHeaderElementStyle mb-8 justify-between")}>
				<input type="text" className="h-full bg-gray-100 p-2 px-4 text-sm rounded-full" placeholder="Search..." />
				<span>10 may - 13 may</span>
			</div>

			<h3>Paramètres</h3>
		</>
	)
}

export function RedirectToHome(props) {
	return (
		<Redirect to={props.path} />
		// {loggedIn ? <Redirect to="/dashboard" /> : <PublicHomePage />}
	)
}

export function NoMatch(props) {
	return (
		<>
			<div className={cx("firstHeaderElementStyle mb-8 justify-between")}>
				<input type="text" className="h-full bg-gray-100 p-2 px-4 text-sm rounded-full" placeholder="Search..." />
				<span>10 may - 13 may</span>
			</div>

			<h3>Oups 404! Cette page n'existe pas...</h3>
		</>
	)
}