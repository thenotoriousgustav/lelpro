export const structure = (S: any) =>
  S.list()
    .title('Admin')
    .items([
      S.listItem()
        .title('Buy')
        .child(
          S.list()
            .title('Content')
            .items([
              S.listItem()
                .title('Home')
                .child(
                  S.documentList().title('Home').filter('_type == "buy_home"')
                ),

              S.listItem()
                .title('Apartment')
                .child(
                  S.documentList()
                    .title('Apartment')
                    .filter('_type == "buy_apartment"')
                ),
            ])
        ),
      S.listItem()
        .title('Rent')
        .child(
          S.list()
            .title('Content')
            .items([
              S.listItem()
                .title('Home')
                .child(
                  S.documentList().title('Home').filter('_type == "rent_home"')
                ),

              S.listItem()
                .title('Apartment')
                .child(
                  S.documentList()
                    .title('Apartment')
                    .filter('_type == "rent_apartment"')
                ),
            ])
        ),
      S.divider(),

      ...S.documentTypeListItems().filter(
        (listItem: any) =>
          ![
            'buy_apartment',
            'buy_home',
            'rent_apartment',
            'rent_home',
          ].includes(listItem.getId())
      ),
    ]);
