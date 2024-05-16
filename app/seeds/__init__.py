from flask.cli import AppGroup

from app.seeds.business import seed_businesses, undo_businesses
from app.seeds.category import seed_category, undo_category
from app.seeds.favJoinTable import seed_join_tables, undo_join_tables
from app.seeds.review import seed_reviews, undo_reviews
from .users import seed_users, undo_users
from app.models.db import db, environment, SCHEMA

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    if environment == 'production':
        # Before seeding, truncate all tables prefixed with schema name
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
        # Add a truncate command here for every table that will be seeded.
        db.session.commit()
    # Add other seed functions here
    seed_users()
    seed_businesses()
    seed_reviews()
    seed_category()
    seed_join_tables()


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_businesses()
    undo_category()
    undo_reviews()
    undo_join_tables()
    # Add other undo functions here
