import { iconCalculette, iconCheckList, iconSectionSettings, iconSectionStock } from './Components/Icones';
import { SidebarAccounting, SidebarPlannings, SidebarSettings, SidebarWarehouses } from './Sidebars';
import { NoMatch, PageAccounting, PageForms, PageFormsId, PageLabels, PageNewForm, PagePlannings, PageSettings, PageTeams, PageWarehouses, RedirectToHome } from './Pages';


export const routes = [
	{
		path: '/plannings',
		menu: {
			title: 'Fiche journalière & planning',
			icon: iconCheckList,
		},
		sidebar: () => <SidebarPlannings />,
		page: () => <PagePlannings />,
		subroutes: [
			{
				path: '/teams',
				page: () => <PageTeams />
			},
			{
				path: '/new-form',
				page: () => <PageNewForm />
			},
			{
				path: '/forms/:id',
				sidebar: () => <SidebarWarehouses />,
				page: () => <PageFormsId />
			},
			{
				path: '/forms',
				page: () => <PageForms />
			},
			{
				path: '/labels',
				page: () => <PageLabels />
			},
		]
	},
	{
		path: '/warehouses',
		menu: {
			title: 'Stock',
			icon: iconSectionStock,
		},
		sidebar: () => <SidebarWarehouses />,
		page: () => <PageWarehouses />,
	},
	{
		path: '/accounting',
		menu: {
			title: 'Comptabilité',
			icon: iconCalculette,
		},
		sidebar: () => <SidebarAccounting />,
		page: () => <PageAccounting />,
	},
	{
		path: '/settings',
		menu: {
			title: 'Paramètres',
			icon: iconSectionSettings,
		},
		sidebar: () => <SidebarSettings />,
		page: () => <PageSettings />,
	},
	{
		path: '/',
		page: () => <RedirectToHome path='/plannings' />,
	},
	{
		path: '*',
		page: () => <NoMatch />,
	}
];