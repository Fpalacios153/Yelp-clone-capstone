"""empty message

Revision ID: d3291a5b88d0
Revises: 
Create Date: 2022-11-01 00:30:46.089932

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'd3291a5b88d0'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('firstName', sa.String(length=50), nullable=False),
    sa.Column('lastName', sa.String(length=50), nullable=False),
    sa.Column('profilePic', sa.String(), nullable=True),
    sa.Column('email', sa.String(length=255), nullable=False),
    sa.Column('hashed_password', sa.String(length=255), nullable=False),
    sa.Column('username', sa.String(length=40), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('username')
    )
    op.create_table('businesstable',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=50), nullable=True),
    sa.Column('email', sa.String(length=255), nullable=False),
    sa.Column('phone', sa.String(), nullable=False),
    sa.Column('description', sa.String(length=500), nullable=False),
    sa.Column('address', sa.String(length=75), nullable=False),
    sa.Column('city', sa.String(length=50), nullable=False),
    sa.Column('state', sa.String(length=50), nullable=False),
    sa.Column('zipcode', sa.String(length=7), nullable=False),
    sa.Column('country', sa.String(length=75), nullable=False),
    sa.Column('image', sa.String(), nullable=False),
    sa.Column('ownerId', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['ownerId'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    op.create_table('reviews',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('review', sa.String(length=1000), nullable=False),
    sa.Column('rating', sa.Integer(), nullable=False),
    sa.Column('userId', sa.Integer(), nullable=False),
    sa.Column('businessId', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['businessId'], ['businesstable.id'], ),
    sa.ForeignKeyConstraint(['userId'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('user_favorites',
    sa.Column('users', sa.Integer(), nullable=True),
    sa.Column('businesstable', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['businesstable'], ['businesstable.id'], ),
    sa.ForeignKeyConstraint(['users'], ['users.id'], )
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('user_favorites')
    op.drop_table('reviews')
    op.drop_table('businesstable')
    op.drop_table('users')
    # ### end Alembic commands ###
