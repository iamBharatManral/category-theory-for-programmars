class Monoid m where
    mempty :: m
    mappend :: m -> m -> m

instance Monoid String where
    mempty = ""
    mappend = (++)
