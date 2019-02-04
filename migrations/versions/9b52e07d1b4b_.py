"""Article, Category and Tag creation

Revision ID: 9b52e07d1b4b
Revises: 3a45dbc8708e
Create Date: 2019-02-04 20:03:52.255730

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '9b52e07d1b4b'
down_revision = '3a45dbc8708e'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('categories',
    sa.Column('id', sa.Integer(), autoincrement=True, nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('name', sa.String(length=50), nullable=False),
    sa.Column('description', sa.String(length=50), nullable=True),
    sa.Column('is_default', sa.Boolean(), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], name='fk_user_category'),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('user_id', 'name', name='category_unique_name')
    )
    op.create_table('tags',
    sa.Column('id', sa.Integer(), autoincrement=True, nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('name', sa.String(length=50), nullable=False),
    sa.Column('color', sa.String(length=10), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], name='fk_user_tags'),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('user_id', 'name', name='tag_unique_name')
    )
    op.create_table('articles',
    sa.Column('id', sa.Integer(), autoincrement=True, nullable=False),
    sa.Column('category_id', sa.Integer(), nullable=True),
    sa.Column('title', sa.String(length=255), nullable=False),
    sa.Column('content', sa.String(), nullable=False),
    sa.Column('date_added', sa.DateTime(), nullable=True),
    sa.Column('comments', sa.String(), nullable=True),
    sa.ForeignKeyConstraint(['category_id'], ['categories.id'], name='fk_category_articles'),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('articles_tags',
    sa.Column('tag_id', sa.Integer(), nullable=False),
    sa.Column('page_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['page_id'], ['articles.id'], ),
    sa.ForeignKeyConstraint(['tag_id'], ['tags.id'], ),
    sa.PrimaryKeyConstraint('tag_id', 'page_id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('articles_tags')
    op.drop_table('articles')
    op.drop_table('tags')
    op.drop_table('categories')
    # ### end Alembic commands ###